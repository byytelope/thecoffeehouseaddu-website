import React from "react";
import "../assets/css/Logo.css";
import Logo from "../assets/img/Thumb_TCHM_transparent.png";

export default function Header() {
    return (
        <div className="w-full py-8">
            <div className="flex justify-center py-8">
                <img
                    className="photo"
                    src={Logo}
                    alt="Logo"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                />
            </div>
        </div>
    );
}
