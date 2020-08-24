import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function MenuCard(props) {
    const descLength = props.drinkDesc.length > 0;
    return (
        <motion.div
            className="xl:max-w-sm max-w-screen-sm overflow-hidden shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
        >
            <img className="w-full" src={props.image} alt="Drink" />
            <div className="text-center px-6 py-4">
                <div className="font-semibold text-tch-gray-dk text-xl md:text-2xl xl:text-lg mb-2">
                    {props.drinkName}
                </div>
                <p className={`text-base md:text-xl xl:text-base text-tch-gray-dk ${descLength ? "py-4" : ""}`}>
                    {props.drinkDesc}
                </p>
            </div>
        </motion.div>
    );
}

MenuCard.propTypes = {
    image: PropTypes.string,
    drinkName: PropTypes.string,
    drinkDesc: PropTypes.string,
};
