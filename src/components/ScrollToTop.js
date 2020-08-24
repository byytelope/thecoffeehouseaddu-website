import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TiArrowUp } from "react-icons/ti";
import "../assets/css/ScrollBtn.css";

export default function ScrollToTop() {
    const [showBtn, setShowBtn] = useState(false);
    const [lastYPos, setLastYPos] = useState(0);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;
            const isPageTop = window.pageYOffset <= 400;
            let btnBool = false;

            if (isScrollingUp && !isPageTop) {
                btnBool = true;
            }

            setShowBtn(btnBool);
            setLastYPos(yPos);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastYPos]);

    return (
        <motion.div
            className={`${
                showBtn ? "" : "pointer-events-none"
            } scrollBtn fixed z-100 flex justify-center cursor-pointer rounded-full bg-tch-gray-lt hover:bg-white right-0 bottom-0 p-8 m-12 opacity-75`}
            animate={{ opacity: showBtn ? 0.75 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.4 } }}
            whileHover={{ opacity: 1 }}
            whileTap={{ opacity: 1 }}
            onClick={scrollTop}
        >
            <TiArrowUp
                className="fixed z-100 self-center pr-1 text-tch-gray-dk opacity-50 hover:opacity-100"
                size="4rem"
            />
        </motion.div>
    );
}
