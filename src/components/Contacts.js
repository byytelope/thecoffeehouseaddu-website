import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faViber,
    faWhatsapp,
    faTelegramPlane,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import "../assets/css/HighlightNone.css";

export function Socials() {
    return (
        <div className="grid gap-16 grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6">
            <motion.div
                className="flex flex-col h-0 justify-center rounded-full cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a
                    href="https://facebook.com/The-Coffee-House-Addu-106094487875368"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>
                        <FontAwesomeIcon icon={faFacebook} color="#1877F2" size="2x" />
                    </div>
                </a>
            </motion.div>
            <motion.div
                className="flex flex-col h-0 justify-center rounded-full cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a
                    href="https://instagram.com/thecoffeehouseaddu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>
                        <FontAwesomeIcon icon={faInstagram} color="#E1306C" size="2x" />
                    </div>
                </a>
            </motion.div>
            <motion.div
                className="flex flex-col h-0 justify-center rounded-full cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a href="viber://chat?number=9607897068" target="_blank" rel="noopener noreferrer">
                    <div>
                        <FontAwesomeIcon icon={faViber} color="#7360F2" size="2x" />
                    </div>
                </a>
            </motion.div>
            <motion.div
                className="flex flex-col h-0 justify-center rounded-full cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a
                    href="https://twitter.com/thecoffeehouseaddu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>
                        <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" size="2x" />
                    </div>
                </a>
            </motion.div>
            <motion.div
                className="flex flex-col h-0 justify-center rounded-full cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a
                    href="https://telegram.me/thecoffeehouseaddu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>
                        <FontAwesomeIcon icon={faTelegramPlane} color="#0088CC" size="2x" />
                    </div>
                </a>
            </motion.div>
            <motion.div
                className="flex flex-col h-0 justify-center rounded-full cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a href="https://wa.me/9607897068" target="_blank" rel="noopener noreferrer">
                    <div>
                        <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
                    </div>
                </a>
            </motion.div>
        </div>
    );
}

export function Contacts() {
    return (
        <div className="grid gap-4 grid-cols-2 select-none highlight-none">
            <a href="tel:+960-7897068">
                <motion.div
                    className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk font-header cursor-pointer transition-colors transition-shadow duration-150 ease-in-out px-4 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 250 }}
                >
                    <div className="flex flex-row">
                        <FontAwesomeIcon
                            icon={faPhoneAlt}
                            color="#3f3f3f"
                            className="self-center mr-4"
                        />
                        <p className="text-lg">CALL US</p>
                    </div>
                </motion.div>
            </a>
            <a href="mailto:hello@thecoffeehouseaddu.com" target="_blank" rel="noopener noreferrer">
                <motion.div
                    className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk font-header cursor-pointer transition-colors transition-shadow duration-150 ease-in-out px-4 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 250 }}
                >
                    <div className="flex flex-row">
                        <FontAwesomeIcon icon={faAt} color="#3f3f3f" className="self-center mr-3" />
                        <p className="text-lg">EMAIL US</p>
                    </div>
                </motion.div>
            </a>
        </div>
    );
}
