import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import PropTypes from "prop-types";
import { wrap } from "@popmotion/popcorn";

const xOffset = 10;
const variants = {
    enter: (direction) => ({
        x: direction > 0 ? xOffset : -xOffset,
        opacity: 0,
    }),
    active: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.3, type: "spring" },
    },
    exit: (direction) => ({
        x: direction > 0 ? -xOffset : xOffset,
        opacity: 0,
    }),
};

const Slides = ({ currentPage, setPage, direction, imageList, pages }) => {
    const hasPaginated = useRef(false);

    const Images = () => {
        return (
            <motion.img
                key={currentPage}
                className="rounded-lg w-full"
                src={imageList[currentPage]}
                alt="Multiple image product"
                variants={variants}
                initial="enter"
                animate="active"
                exit="exit"
                drag="x"
                onDrag={detectPaginationGesture}
                onDragStart={() => (hasPaginated.current = false)}
                onDragEnd={() => (hasPaginated.current = true)}
                // Snap the component back to the center if it hasn't paginated
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                // This will be used for components to resolve all other variants, in
                // this case initial and animate.
                custom={direction}
            />
        );
    };

    const detectPaginationGesture = (e, { offset }) => {
        if (hasPaginated.current) return;
        let newPage = currentPage;
        const threshold = xOffset / 2;

        if (offset.x < -threshold) {
            // If we're dragging left, go forward a page
            newPage = currentPage + 1;
        } else if (offset.x > threshold) {
            // If we're dragging right, go backwards a page
            newPage = currentPage - 1;
        }

        if (newPage !== currentPage) {
            hasPaginated.current = true;
            // Wrap the page index to within the permitted page range
            newPage = wrap(0, pages.length, newPage);
            setPage(newPage, offset.x < 0 ? 1 : -1);
        }
    };

    return (
        <div className="w-full flex flex-row">
            <AnimatePresence
                // Disable entry animations when AnimatePresence mounts, but allow
                // them when new children enter.
                initial={false}
                // This will be used for components to resolve exit variants. It's neccessary
                // as removed components won't rerender with the latest state (as they've been removed)
                custom={direction}
                exitBeforeEnter
            >
                <Images />
            </AnimatePresence>
        </div>
    );
};

const Pagination = ({ currentPage, setPage, pages }) => {
    // Wrap all the pagination dots with AnimateSharedPresence so we can detect
    // when dots with a layoutId are removed/added
    return (
        <AnimateSharedLayout exitBeforeEnter>
            <div className="flex justify-center mt-3 p-4 space-x-8">
                {pages.map((page) => (
                    <Dot
                        key={page}
                        onClick={() => setPage(page)}
                        isSelected={page === currentPage}
                    />
                ))}
            </div>
        </AnimateSharedLayout>
    );
};

const Dot = ({ isSelected, onClick }) => {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <div className="rounded-full bg-tch-gray-md dark:bg-tch-dark-surface-2 p-1.5">
                {isSelected && (
                    // By setting layoutId, when this component is removed and a new one
                    // is added elsewhere, the new component will animate out from the old one.
                    <motion.div
                        className="rounded-full bg-tch-gray-dk dark:bg-tch-dark-surface-3 p-1.5 absolute -m-1.5 z-10"
                        layoutId="highlight"
                    />
                )}
            </div>
        </div>
    );
};

export default function ImageCarousel(props) {
    const [[currentPage, direction], setCurrentPage] = useState([0, 0]);
    const pages = [...Array(props.cardImages.length).keys()];

    const setPage = (newPage, newDirection) => {
        if (!newDirection) newDirection = newPage - currentPage;
        setCurrentPage([newPage, newDirection]);
    };

    useEffect(() => {
        const newPage = wrap(0, pages.length, currentPage + 1);
        const interval = setInterval(() => {
            setPage(newPage);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentPage]);

    return (
        <>
            <Slides
                currentPage={currentPage}
                direction={direction}
                setPage={setPage}
                imageList={props.cardImages}
                pages={pages}
            />
            <Pagination currentPage={currentPage} setPage={setPage} pages={pages} />
        </>
    );
}

ImageCarousel.propTypes = {
    cardImages: PropTypes.array,
};

Slides.propTypes = {
    currentPage: PropTypes.number,
    direction: PropTypes.number,
    setPage: PropTypes.func,
    imageList: PropTypes.array,
    pages: PropTypes.array,
};

Pagination.propTypes = {
    currentPage: PropTypes.number,
    setPage: PropTypes.func,
    pages: PropTypes.array,
};

Dot.propTypes = {
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
};
