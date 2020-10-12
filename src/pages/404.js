import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

import Header from "../components/Header";

export default function FourOFour() {
    const [location, setLocation] = useLocation();
    const errorResponses = [
        "UH OH STINKY. ROUTE FUNNY.",
        "QUIT SNOOPIN'!",
        "NOTHING TO SEE HERE.",
        "GO AWAY.",
    ];
    const randomResponse = errorResponses[~~(Math.random() * errorResponses.length)];
    const animContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    const animLines = {
        initial: { opacity: 0, y: 20},
        animate: { opacity: 1, y: 0},
    };

    const Button = () => {
        return (
            <motion.div
                className="py-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    delay: 2 / 10,
                }}
            >
                <motion.div
                    className="w-full-sm rounded-lg bg-tch-gray-lt dark:bg-tch-dark-surface-2 hover:bg-tch-gray-md dark:hover:bg-tch-gray-dk hover:shadow-lg text-center text-tch-gray-dk dark:text-tch-gray-md text-1.5xl font-header cursor-pointer transition-colors transition-shadow duration-150 ease-in-out py-4 px-6"
                    onClick={() => setLocation("/")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 250 }}
                >
                    <p>BACK TO HOME</p>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div className="h-screen flex flex-col dark:bg-tch-dark-surface">
            <Header delay={0.5} />
            <motion.div variants={animContainer} initial="initial" animate="animate">
                <motion.p
                    className="font-header text-3xl md:text-5xl lg:text-6xl xl:text-6xl text-tch-gray-dk dark:text-tch-gray-md text-center mt-auto px-4 pb-4"
                    variants={animLines}
                >
                    {randomResponse}
                </motion.p>
                <motion.p
                    className="font-normal text-xl md:text-2xl lg:text-2xl xl:text-3xl text-tch-gray-dk dark:text-tch-gray-md text-center px-4 pb-4"
                    variants={animLines}
                >
                    The page <b className="text-red-500">{location}</b> doesn&apos;t exist.
                </motion.p>
            </motion.div>
            <div className="m-auto">
                <Button />
            </div>
        </div>
    );
}
