import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function MenuCard(props) {
    const descLength = props.cardDesc.length > 0;
    const priceLength = props.cardPrice !== 1024;

    return (
        <motion.div
            className="xl:max-w-sm max-w-screen-sm rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.025 }}
            transition={{ type: "spring", stiffness: 400, damping: 50 }}
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
                    className={`text-base md:text-xl xl:text-base text-tch-gray-dk text-left overflow-auto pt-4 ${
                        descLength ? "" : "hidden"
                    }`}
                >
                    {props.cardDesc}
                </p>
            </div>
            <div className={`px-6 pt-4 pb-6 ${priceLength ? "" : "hidden"}`}>
                <div className="flex justify-center md:w-1/6 lg:w-3/12 xl:w-3/12 rounded-full font-extrabold text-tch-gray-dk px-2 py-1 bg-tch-gray-lt">
                    <p className="self-center">{`MVR ${props.cardPrice}`}</p>
                </div>
            </div>
        </motion.div>
    );
}

MenuCard.propTypes = {
    cardImage: PropTypes.string,
    cardName: PropTypes.string,
    cardDesc: PropTypes.string,
    cardPrice: PropTypes.number,
};
