import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faSnowflake, faUtensils } from "@fortawesome/free-solid-svg-icons";

interface MenuCardProps {
    cardImages: Array<string>;
    cardName: string;
    cardDesc: string;
    cardPrice?: number;
    cardSalePrice?: number;
    cardIsHot?: boolean;
    cardIsCold?: boolean;
    cardIsFood?: boolean;
}

export default function MenuCard(props: MenuCardProps) {
    const descLength = props.cardDesc.length > 0;
    const showPrice = props.cardPrice !== undefined;

    return (
        <motion.div
            className="flex flex-col justify-start xl:max-w-sm dark:bg-tch-dark-surface-1 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-out duration-500"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", bounce: 0.5 }}
        >
            <img
                className="w-full rounded-lg"
                src={props.cardImages[0]}
                alt={props.cardName}
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
            />
            <div className="text-center px-6 py-4 flex-grow">
                <div className="tracking-wide font-semibold text-tch-gray-dk text-xl dark:text-tch-gray-md md:text-2xl xl:text-lg mb-2">
                    {props.cardName}
                </div>
                <p
                    className={`tracking-wide text-base md:text-lg xl:text-base text-tch-gray-dk dark:text-tch-gray-md text-left pt-4 pb-2 ${
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
                    } font-extrabold dark:bg-tch-dark-surface-2 text-tch-gray-dk dark:text-tch-gray-md px-2 py-1 bg-tch-gray-lt`}
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
                <div className="self-center space-x-4 text-tch-gray-dk dark:text-tch-dark-surface-3 pr-2">
                    <FontAwesomeIcon
                        icon={faMugHot}
                        className={`${props.cardIsHot ? "" : "hidden"}`}
                    />
                    <FontAwesomeIcon
                        icon={faSnowflake}
                        className={`${props.cardIsCold ? "" : "hidden"}`}
                    />
                    <FontAwesomeIcon
                        icon={faUtensils}
                        className={`${props.cardIsFood ? "" : "hidden"}`}
                    />
                </div>
            </div>
        </motion.div>
    );
}
