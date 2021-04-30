import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
    const [showBtn, setShowBtn] = useState(false);
    const [lastYPos, setLastYPos] = useState(0);
    let btnBool = false;

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleOnDocBottom = () => {
        btnBool = true;
    };

    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;
            const isPageTop = window.pageYOffset <= 800;

            if (isScrollingUp && !isPageTop) {
                btnBool = true; // eslint-disable-line
            }

            setShowBtn(btnBool);
            setLastYPos(yPos);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastYPos, btnBool]);

    return (
        <div className="flex justify-center">
            <motion.div
                className={`${
                    showBtn ? "" : "pointer-events-none"
                } hover:shadow-md transition-all duration-500 ease-out fixed z-50 flex justify-center cursor-pointer rounded-full bg-tch-gray-lt dark:bg-tch-dark-surface-2 hover:bg-white dark:hover:bg-tch-gray-dk top-0 mb-20 mt-12 opacity-75 select-none`}
                animate={{ opacity: showBtn ? 0.85 : 0 }}
                initial={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.4 } }}
                whileHover={{ opacity: 1 }}
                whileTap={{ opacity: 1 }}
                onClick={scrollTop}
            >
                <FontAwesomeIcon
                    icon={faArrowUp}
                    className="text-tch-gray-dk dark:text-tch-gray-md m-3"
                    size="lg"
                />
                <p className="self-center text-tch-gray-dk dark:text-tch-gray-md font-extrabold pr-4">
                    Scroll to top
                </p>
            </motion.div>
            <BottomScrollListener onBottom={handleOnDocBottom} />
        </div>
    );
}
