import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import HeaderLogo from "../assets/img/HeaderLogo.webp";
import "../assets/css/Logo.css";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/ToastDefault.css";

export default function Header() {
    return (
        <motion.div
            className="flex justify-center w-full py-16"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
        >
            <img
                className="photo"
                src={HeaderLogo}
                alt="Logo"
                draggable="false"
                width={1340}
                height={1340}
                onContextMenu={(e) => e.preventDefault()}
            />
        </motion.div>
    );
}

Header.propTypes = {
    headerLogo: PropTypes.string,
};
