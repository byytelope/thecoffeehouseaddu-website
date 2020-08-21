import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function MenuCard(props) {
    return (
        <motion.div className="xl:max-w-sm max-w-screen-sm overflow-hidden shadow-lg hover:shadow-xl" whileHover={{scale: 1.05}}>
            <img className="w-full" src={props.image} alt="Drink"/>
            <div className="text-center px-6 py-4">
                <div className="font-semibold text-xl text-tch-gray-dk md:text-3xl xl:text-lg mb-2">{props.drinkName}</div>
                <p className="text-base md:text-2xl xl:text-base text-tch-gray-dk">{props.drinkDesc}</p>
            </div>
        </motion.div>
    );
}

MenuCard.propTypes = {
    image: PropTypes.string,
    drinkName: PropTypes.string,
    drinkDesc: PropTypes.string
};
