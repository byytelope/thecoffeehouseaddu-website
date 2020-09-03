import React from "react";
import "../assets/css/Logo.css";
import HeaderLogo from "../assets/img/HeaderLogo.png";

export default function Header() {
    return (
        <div className="w-full py-8">
            <div className="flex justify-center py-8">
                <img
                    className="photo"
                    src={HeaderLogo}
                    alt="Logo"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                />
            </div>
        </div>
    );
}
