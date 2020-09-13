import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TiArrowUp } from "react-icons/ti";
import BottomScrollListener from "react-bottom-scroll-listener";
import "../assets/css/ScrollBtn.css";

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
                // eslint-disable-next-line
                btnBool = true;
            }

            setShowBtn(btnBool);
            setLastYPos(yPos);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastYPos]);

    return (
        <div className="flex justify-center">
            <motion.div
                className={`${
                    showBtn ? "" : "pointer-events-none"
                } scrollBtn fixed z-50 flex justify-center cursor-pointer rounded-full bg-tch-gray-lt hover:bg-white top-0 mb-20 m-12 opacity-75 select-none`}
                animate={{ opacity: showBtn ? 0.85 : 0 }}
                initial={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.4 } }}
                whileHover={{ opacity: 1 }}
                whileTap={{ opacity: 1 }}
                onClick={scrollTop}
            >
                <TiArrowUp
                    className="self-center text-tch-gray-dk"
                    size="2.5rem"
                />
                <p className="self-center text-tch-gray-dk font-extrabold pr-4">Scroll to top</p>
            </motion.div>
            <BottomScrollListener onBottom={handleOnDocBottom} />
        </div>
    );
}
