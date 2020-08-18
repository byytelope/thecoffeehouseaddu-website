import React, { useRef } from "react";
import "../assets/css/Logo.css";
import Logo from "../assets/img/Thumb_TCHM_transparent.png";
import HeaderText from "./HeaderText";

export default function Header() {
    const logoRef = useRef();

    return (
        <div>
            <div className="w-full bg-gray-100 pb-8">
                <div className="flex justify-center py-8" ref={logoRef} onClick={() => window.scrollTo({behavior: "smooth", top: logoRef.current.offsetTop})}>
                    <img className="photo" src={Logo} alt="Logo"/>
                </div>
                {/* <div className="flex justify-center text-center text-6xl">
                    <text className="flex-shrink">
                    
                    </text>
                </div>
                <div className="flex justify-center text-gray-800 text-center text-4xl">
                    <text className="flex-shrink">
                    
                    </text>
                </div> */}
                <HeaderText/>
            </div>
        </div>
    );
}
