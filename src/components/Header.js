import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";

import { LoyaltyContext } from "../contexts/LoyaltyContext";

import "../assets/css/Logo.css";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/ToastDefault.css";

export default function Header(props) {
    const { setRenderLoyalty } = useContext(LoyaltyContext);
    const [showLoyalty, setShowLoyalty] = useState(0);
    const [clickTimes, setClickTimes] = useState(5);

    const notify = () =>
        toast(`Click ${clickTimes} more times!`, {
            toastId: 1,
            className: "toast-container toast-container-after font-extrabold",
            hideProgressBar: true,
        });

    const handleOnClick = () => {
        setShowLoyalty(showLoyalty + 1);
        setClickTimes(clickTimes - 1);
        if (showLoyalty === 0) {
            notify();
        } else if (showLoyalty < 4) {
            toast.update(1, { render: `Click ${clickTimes} more times!` });
        } else if (showLoyalty === 4) {
            toast.update(1, { render: `Click ${clickTimes} more time!` });
        } else if (showLoyalty === 5) {
            toast.dismiss(1);
        }
    };

    useEffect(() => {
        if (showLoyalty === 6) {
            setRenderLoyalty(true);
        }
    }, [showLoyalty]);

    return (
        <motion.div
            className="flex justify-center w-full py-16"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
        >
            <ToastContainer />
            <img
                className="photo"
                src={props.headerLogo}
                alt="Logo"
                draggable="false"
                width={1340}
                height={1340}
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => handleOnClick()}
            />
        </motion.div>
    );
}

Header.propTypes = {
    headerLogo: PropTypes.string,
};
