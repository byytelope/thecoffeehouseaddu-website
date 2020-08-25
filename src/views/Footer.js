import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Contacts() {
    return (
        <div className="flex flex-row w-full justify-between bg-tch-gray-lt0">
            <div className="flex flex-start self-start items-center space-x-8 p-8">
                <motion.div
                    className="flex flex-col h-0 justify-center rounded-full cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
            </div>
            <div className="font-header text-center hidden sm:flex md:flex lg:flex xl:flex text-tch-gray-dk self-center">
                THE COFFEE HOUSE MALDIVES
            </div>
            <div className="font-header text-tch-gray-dk self-center px-8">
                EST2020
            </div>
        </div>
    );
}
