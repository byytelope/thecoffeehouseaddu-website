import { motion } from "framer-motion";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Contacts, Socials } from "../components/Contacts";

export default function Footer() {
    return (
        <div className="flex flex-col w-full justify-between bg-tch-gray-lt0 dark:bg-tch-dark-surface-1 pt-2 pb-4">
            <div className="flex justify-center pt-16 pb-4">
                <Socials />
            </div>
            <div className="flex justify-center py-8 pt-12">
                <Contacts />
            </div>
            <div className="font-header text-xl xs:text-1.5xl text-center text-tch-gray-dk dark:text-tch-gray-md self-center pb-2">
                THE COFFEE HOUSE ADDU
            </div>
            <motion.button
                className="w-auto font-bold text-center text-sm xs:text-base text-tch-gray-dk dark:text-tch-gray-md self-center rounded-full hover:shadow-md bg-tch-gray-lt dark:bg-tch-dark-surface-2 hover:bg-tch-gray-md dark:hover:bg-tch-gray-dk focus:bg-tch-gray-md dark:focus:bg-tch-gray-dk focus:outline-none cursor-pointer transition-shadow duration-500 ease-out px-4 py-1"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                transition={{ type: "spring", bounce: 0.5 }}
                onClick={() =>
                    window.open(
                        "https://www.google.com/maps/dir/?api=1&amp;origin=&amp;destination=-0.599006,73.082549&amp;travelmode=driving",
                        "_blank"
                    )
                }
            >
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;RADHEBAIGE, HITHADHOO <br />
            </motion.button>
            <div className="tracking-wide font-body text-center text-sm xs:text-base text-tch-gray-dk dark:text-tch-gray-md self-center pt-4">
                EST.&nbsp;2020
            </div>
        </div>
    );
}
