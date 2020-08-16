import React from "react";
import {useSpring, animated} from "react-spring";
import Navbar from "../components/Navbar";

export default function Home() {
    const FadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    
    return (
        <div>
            <Navbar/>
            <animated.div style={FadeIn}>
                <div className="font-bold text-4xl text-center text-gray-700 p-3">
                    Hello {props.name}
                </div>
                <svg className="animate-bounce w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </animated.div>

        </div>
    );
}
