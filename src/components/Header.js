import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/Logo.css";
// import HeaderLogo from "../assets/img/HeaderLogo.png";

export default function Header() {
    const [headerLogo, setHeaderLogo] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            const response = await axios.get(
                "https://google-photos-album-demo2.glitch.me/v3jsgKUCsjbpbMZW7"
            );
            setHeaderLogo(response.data[0]);
        }
        fetchImages();
    }, []);

    return (
        <div className="w-full py-8">
            <div className="flex justify-center py-8">
                <img
                    className="photo"
                    src={headerLogo}
                    alt="Logo"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                />
            </div>
        </div>
    );
}
