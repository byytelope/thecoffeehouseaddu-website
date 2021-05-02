import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomButton({ btnData, onClick }) {
    return (
        <motion.button
            className="w-full rounded-lg bg-tch-gray-lt dark:bg-tch-dark-surface-2 hover:bg-tch-gray-md dark:hover:bg-tch-gray-dk focus:bg-tch-gray-md dark:focus:bg-tch-gray-dk hover:shadow-lg text-center text-tch-gray-dk dark:text-tch-gray-md font-header transition-shadow ease-out duration-500 cursor-pointer py-4 px-6 focus:outline-none"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.5 }}
        >
            <div className="flex flex-row justify-center">
                {btnData.icon && (
                    <FontAwesomeIcon icon={btnData.icon} className="self-center mr-2 xs:mr-4" />
                )}
                <p className="text-base xs:text-lg sm:text-xl">{btnData.text}</p>
            </div>
        </motion.button>
    );
}
