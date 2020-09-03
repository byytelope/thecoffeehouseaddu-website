import React from "react";
import { Contacts, Socials } from "../components/Contacts";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <div className="flex flex-col w-full justify-between bg-tch-gray-lt0 pt-2 pb-4">
            <div className="flex justify-center pt-16 pb-4">
                <Socials />
            </div>
            <div className="flex justify-center py-8 pt-12">
                <Contacts />
            </div>
            <div className="font-extrabold text-xl text-center text-tch-gray-dk self-center">
                THE COFFEE HOUSE ADDU
            </div>
            <motion.div
                className="font-medium text-center text-tch-gray-dk self-center rounded-full hover:shadow-md bg-tch-gray-lt hover:bg-tch-gray-md cursor-pointer transition-colors transition-shadow duration-150 ease-in-out select-none highlight-none px-4 py-1"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                transition={{ type: "spring", stiffness: 250 }}
            >
                <a
                    href="https://www.google.com/maps/dir/?api=1&amp;origin=&amp;destination=-0.599006,73.082549&amp;travelmode=driving"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faMapPin} />
                    &nbsp;&nbsp;RADHEBAIGE, HITHADHOO <br />
                </a>
            </motion.div>
            <div className="font-regular text-center text-tch-gray-dk self-center pt-4">
                EST.&nbsp;2020
            </div>
        </div>
    );
}
