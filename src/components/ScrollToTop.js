import React, { useState } from "react";
import { TiArrowUp } from "react-icons/ti";
import "../assets/css/ScrollBtn.css";

export default function ScrollToTop() {
    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = () => {    
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true);    
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false);    
        }  
    };
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };
    window.addEventListener("scroll", checkScrollTop);
    
    return (
        <button className="scrollBtn fixed z-100 flex justify-center cursor-pointer rounded-full bg-tch-gray-lt hover:bg-white right-0 bottom-0 p-8 m-12 opacity-75" onClick={scrollTop} style={{height: 40, width: 40, display: showScroll ? "flex" : "none"}}>
            <TiArrowUp className="fixed z-100 self-center pr-1 text-tch-gray-dk" size="4rem"/>
        </button>
    );
}
