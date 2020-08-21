import React, { useRef } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import About from "./About";
import Menu from "./Menu";
import Specialty from "./Specialty";
import "../assets/css/NavBtn.css";

// import Background from "../assets/img/Background.jpg";

export default function Home() {
    const menuRef = useRef();
    const specialtyRef = useRef();
    const aboutRef = useRef();
    // style={{backgroundImage:` url(${Background})`}}
    return (
        <div>
            <Header/>
            <div className="flex justify-center items-center py-8 flex-col md:flex-row lg:flex-row xl:flex-row space-x-0 md:space-x-12 lg:space-x-12 xl:space-x-56 space-y-8 md:space-y-0 lg:space-y-0 xl:space-y-0">
                <motion.div 
                    className="sm:w-2/3 xl:w-1/12 bg-tch-gray-lt text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4"
                    onClick={() => window.scrollTo({behavior: "smooth", top: aboutRef.current.offsetTop})}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    <text >OUR STORY</text>
                </motion.div>
                <motion.div 
                    className="sm:w-2/3 xl:w-1/12 bg-tch-gray-lt text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4"
                    onClick={() => window.scrollTo({behavior: "smooth", top: menuRef.current.offsetTop})}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    <text>PRODUCTS</text>
                </motion.div>
                <motion.div 
                    className="sm:w-2/3 xl:w-1/12 bg-tch-gray-lt text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4"
                    onClick={() => window.scrollTo({behavior: "smooth", top: specialtyRef.current.offsetTop})}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    <text>SPECIALTY</text>
                </motion.div>
            </div>
            <div ref={menuRef}>
                <Menu/>
            </div>
            <div ref={specialtyRef}>
                <Specialty />
            </div>
            <div ref={aboutRef}>
                <About/>
            </div>
            <ScrollToTop/>
        </div>
    );
}
