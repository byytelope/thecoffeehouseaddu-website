import React from "react";
import "../assets/css/Logo.css";
import headerLogo from "../assets/img/HeaderLogo.png";

export default function Header() {

    return (
        <div className="w-full py-8">
            <div className="flex justify-center py-8">
                <img
                    className="photo"
                    src={headerLogo}
                    alt="Logo"
                    draggable="false"
                    width={1340}
                    height={1340}
                    onContextMenu={(e) => e.preventDefault()}
                />
            </div>
        </div>
    );
}
