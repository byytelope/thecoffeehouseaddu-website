import React from "react";
import { motion } from "framer-motion";
import "../assets/css/Logo.css";
import headerLogo from "../assets/img/HeaderLogo.png";

export function Header() {
    return (
        <motion.div
            className="flex justify-center w-full py-16"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
        >
            <img
                className="photo"
                src={headerLogo}
                alt="Logo"
                draggable="false"
                width={1340}
                height={1340}
                onContextMenu={(e) => e.preventDefault()}
            />
        </motion.div>
    );
}

export function Buttons(props) {
    return props.btnData.map((btnContent) => (
        <motion.div
            key={btnContent.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 250,
                delay: 1 + btnContent.id / 10,
            }}
        >
            <motion.div
                key={btnContent.id}
                className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer transition-colors transition-shadow duration-150 ease-in-out py-4 px-6"
                onClick={() =>
                    window.scrollTo({ behavior: "smooth", top: btnContent.ref.offsetTop })
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
