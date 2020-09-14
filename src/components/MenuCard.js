import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faSnowflake, faUtensils } from "@fortawesome/free-solid-svg-icons";
import ImageCarousel from "../components/ImageCarousel";

export default function MenuCard(props) {
    const descLength = props.cardDesc.length > 0;
    const showPrice = props.cardPrice !== undefined;

    return (
        <motion.div
            className="flex flex-col justify-start xl:max-w-sm max-w-screen-sm rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.025 }}
            transition={{ type: "spring", stiffness: 400, damping: 50 }}
        >
            {props.cardImageMany ? (
                <ImageCarousel cardImages={props.cardImages} />
            ) : (
                <img
                    className="w-full rounded-lg"
                    src={props.cardImages[0]}
                    alt={props.cardName}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                />
            )}
            <div className="text-center px-6 py-4 flex-grow">
                <div className="font-semibold text-tch-gray-dk text-xl md:text-2xl xl:text-lg mb-2">
                    {props.cardName}
                </div>
                <p
                    className={`text-base md:text-xl xl:text-base text-tch-gray-dk text-left pt-4 pb-2 ${
                        descLength ? "" : "hidden"
                    }`}
                >
                    {props.cardDesc}
                </p>
            </div>
            <div
                className={`flex flex-row justify-between px-6 pt-2 pb-6 ${
                    showPrice ? "" : "hidden"
                }`}
            >
                <div
                    className={`flex justify-center ${
                        props.cardSalePrice ? "rounded-lg" : "rounded-full"
                    } font-extrabold text-tch-gray-dk px-2 py-1 bg-tch-gray-lt`}
                >
                    {props.cardSalePrice ? (
                        <div className="flex flex-col self-center px-1">
                            <s className="text-red-500">{`MVR ${props.cardPrice}`}</s>
                            <p className="">{`MVR ${props.cardSalePrice}`}</p>
                        </div>
                    ) : (
                        <p className="self-center px-1">{`MVR ${props.cardPrice}`}</p>
                    )}
                </div>
                <div className="self-center space-x-4 pr-2">
                    <FontAwesomeIcon
                        icon={faMugHot}
                        color="#3f3f3f"
                        className={`${props.cardIsHot ? "" : "hidden"}`}
                    />
                    <FontAwesomeIcon
                        icon={faSnowflake}
                        color="#3f3f3f"
                        className={`${props.cardIsCold ? "" : "hidden"}`}
                    />
                    <FontAwesomeIcon
                        icon={faUtensils}
                        color="#3f3f3f"
                        className={`${props.cardIsFood ? "" : "hidden"}`}
                    />
                </div>
            </div>
        </motion.div>
    );
}

MenuCard.propTypes = {
    cardImages: PropTypes.array,
    cardImageMany: PropTypes.bool,
    cardName: PropTypes.string,
    cardDesc: PropTypes.string,
    cardPrice: PropTypes.number,
    cardSalePrice: PropTypes.number,
    cardIsHot: PropTypes.bool,
    cardIsCold: PropTypes.bool,
    cardIsFood: PropTypes.bool,
};
