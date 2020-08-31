import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function MenuCard(props) {
    const descLength = props.cardDesc.length > 0;

    return (
        <motion.div
            className="xl:max-w-sm max-w-screen-sm rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
        >
            <img
                className="w-full rounded-lg"
                src={props.cardImage}
                alt="Drink"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
            />
            <div className="text-center px-6 py-4">
                <div className="font-semibold text-tch-gray-dk text-xl md:text-2xl xl:text-lg mb-2">
                    {props.cardName}
                </div>
                <p
                    className={`text-base md:text-xl xl:text-base text-tch-gray-dk text-left overflow-auto ${
                        descLength ? "py-4" : ""
                    }`}
                >
                    {props.cardDesc}
                </p>
            </div>
        </motion.div>
    );
}

MenuCard.propTypes = {
    cardImage: PropTypes.string,
    cardName: PropTypes.string,
    cardDesc: PropTypes.string,
};
