import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import HeaderLogo from "../components/HeaderLogo";

export default function Header(props) {
    return (
        <motion.div
            className="flex justify-center w-full py-16"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: props.delay }}
        >
            <HeaderLogo
                className="transform scale-125 select-none fill-current text-tch-dark-surface-2 dark:text-tch-gray-md"
                width="15rem"
                height="15rem"
            />
        </motion.div>
    );
}

Header.propTypes = {
    delay: PropTypes.number,
};
