import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import CustomButton from "../components/CustomButton";
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
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <div className="h-screen flex flex-col dark:bg-tch-dark-surface">
            <Header delay={0.5} />
            <motion.div variants={animContainer} initial="initial" animate="animate">
                <motion.p
                    className="font-header text-3xl lg:text-4xl xl:text-5xl text-tch-gray-dk dark:text-tch-gray-md text-center mt-auto px-4 pb-4"
                    variants={animLines}
                >
                    {randomResponse}
                </motion.p>
                <motion.p
                    className="font-normal text-xl md:text-2xl text-tch-gray-dk dark:text-tch-gray-md text-center px-4 pb-4"
                    variants={animLines}
                >
                    The page <b className="text-red-500">{location}</b> doesn&apos;t exist.
                </motion.p>
            </motion.div>
            <motion.div
                className="py-4 m-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    delay: 2 / 10,
                }}
            >
                <CustomButton
                    btnData={{ text: "BACK TO HOME", icon: faLongArrowAltLeft }}
                    onClick={() => setLocation("/")}
                />
            </motion.div>
        </div>
    );
}
