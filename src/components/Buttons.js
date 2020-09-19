import React, { useContext } from "react";
import { motion } from "framer-motion";

import { LoyaltyContext } from "../contexts/LoyaltyContext";

export default function Buttons(props) {
    const { renderLoyalty } = useContext(LoyaltyContext);
    const btnData = props.btnData;

    if (renderLoyalty) {
        delete btnData[1];
    } else {
        delete btnData[0];
    }

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
                className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-1.5xl font-header cursor-pointer transition-colors transition-shadow duration-150 ease-in-out py-4 px-6"
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
