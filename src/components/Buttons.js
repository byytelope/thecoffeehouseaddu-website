import React from "react";
import { motion } from "framer-motion";

export default function Buttons(props) {
    const btnData = props.btnData;

    return btnData.map((btnContent) => (
        <motion.div
            key={btnContent.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
                type: "spring",
                stiffness: 250,
                delay: 1 + btnContent.id / 10,
            }}
        >
            <motion.div
                key={btnContent.id}
                className="w-full-sm rounded-lg bg-tch-gray-lt dark:bg-tch-dark-surface-2 hover:bg-tch-gray-md dark:hover:bg-tch-gray-dk hover:shadow-lg text-center text-tch-gray-dk dark:text-tch-gray-md text-1.5xl font-header cursor-pointer transition-colors transition-shadow duration-150 ease-in-out py-4 px-6"
                onClick={() =>
                    window.scrollTo({ behavior: "smooth", top: btnContent.ref.current.offsetTop })
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250 }}
            >
                <p>{btnContent.text}</p>
            </motion.div>
        </motion.div>
    ));
}
