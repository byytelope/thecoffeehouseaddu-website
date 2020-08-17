import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import About from "./About";
import Menu from "./Menu";
import Ingredients from "./Ingredients";
import "../assets/css/NavBtn.css";

// import Background from "../assets/img/Background.jpg";

export default function Home() {
    const FadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    // style={{backgroundImage:` url(${Background})`}}
    const menuRef = useRef();
    const orderRef = useRef();
    const aboutRef = useRef();
    
    return (
        <div>
            <animated.div style={FadeIn}>
                <Navbar/>
            </animated.div>
            <ScrollToTop/>
            <div className="flex justify-center py-8">
                <ul className="flex justify-center text-xl text-gray-700 max-w-sm rounded-md overflow-hidden border-2 border-gray-400 bg-gray-300 divide-x divide-gray-400">
                    <li className="navBtn font-bold p-4 cursor-pointer hover:text-gray-800" onClick={() => window.scrollTo({behavior: "smooth", top: menuRef.current.offsetTop})}>
                        <text>MENU</text>
                    </li>
                    <li className="navBtn font-bold p-4 cursor-pointer hover:text-gray-800" onClick={() => window.scrollTo({behavior: "smooth", top: orderRef.current.offsetTop})}>
                        <text ref={orderRef}>INGREDIENTS</text>
                    </li>
                    <li className="navBtn font-bold p-4 cursor-pointer hover:text-gray-800 flex-shrink-0" onClick={() => window.scrollTo({behavior: "smooth", top: aboutRef.current.offsetTop})}>
                        <text ref={aboutRef}>ABOUT US</text>
                    </li>
                </ul>
            </div>
            <div ref={menuRef}>
                <Menu/>
            </div>
            <div ref={orderRef}>
                <Ingredients />
            </div>
            <div ref={aboutRef}>
                <About/>
            </div>
        </div>
    );
}
