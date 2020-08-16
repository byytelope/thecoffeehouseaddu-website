import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import About from "./About";
import Menu from "./Menu";
import Order from "./Order";

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
            <div className="flex justify-center py-8">
                <ul className="flex justify-center text-xl text-gray-700 max-w-sm rounded-md overflow-hidden border-2 border-gray-400 bg-gray-300 divide-x divide-gray-400">
                    {/* <li>
                                <Link to="/home">Home</Link>
                            </li> */}
                    <li className="font-bold p-4 cursor-pointer">
                        <text onClick={() => window.scrollTo({behavior: "smooth", top: menuRef.current.offsetTop})}>Menu</text>
                    </li>
                    <li className="font-bold p-4 cursor-pointer">
                        <text ref={orderRef} onClick={() => window.scrollTo({behavior: "smooth", top: orderRef.current.offsetTop})}>Order Now</text>
                    </li>
                    <li className="font-bold p-4 cursor-pointer">
                        <text ref={aboutRef} onClick={() => window.scrollTo({behavior: "smooth", top: aboutRef.current.offsetTop})}>About Us</text>
                    </li>
                </ul>
            </div>
            <div ref={menuRef}>
                <Menu/>
            </div>
            <div ref={orderRef}>
                <Order />
            </div>
            <div ref={aboutRef}>
                <About/>
            </div>
            <ScrollToTop/>
        </div>
    );
}
