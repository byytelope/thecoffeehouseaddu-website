import React, { useRef } from "react";
import HomeText from "../components/HomeText";

import "../assets/css/Logo.css";
import Logo from "../assets/img/Thumb_TCHM_transparent.png";


export default function Header() {
    const logoRef = useRef();

    return (
        <div>
            <div className="w-full bg-gray-100 pb-8">
                <div className="flex justify-center py-8" ref={logoRef} onClick={() => window.scrollTo({behavior: "smooth", top: logoRef.current.offsetTop})}>
                    <img className="photo" src={Logo} alt="Logo"/>
                </div>
                <HomeText/>
            </div>
        </div>
    );
}
