import React, { useRef } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import About from "./About";
import Menu from "./Menu";
import Specialty from "./Specialty";
import Testimonies from "./Testimonials";
import "../assets/css/NavBtn.css";

// import Background from "../assets/img/Background.jpg";

export default function Home() {
    const menuRef = useRef();
    const specialtyRef = useRef();
    const aboutRef = useRef();
    const testimonialsRef = useRef();
    // style={{backgroundImage:` url(${Background})`}}
    //  flex-col md:flex-row lg:flex-row xl:flex-row space-x-0 md:space-x-12 lg:space-x-12 xl:space-x-18 space-y-8 md:space-y-0 lg:space-y-0 xl:space-y-0
    return (
        <div>
            <Header />
            <div className="flex justify-center px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-12">
                    <motion.div
                        className="w-full bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4 px-6"
                        onClick={() =>
                            window.scrollTo({ behavior: "smooth", top: aboutRef.current.offsetTop })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p>OUR STORY</p>
                    </motion.div>
                    <motion.div
                        className="w-full bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4 px-6"
                        onClick={() =>
                            window.scrollTo({ behavior: "smooth", top: menuRef.current.offsetTop })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p>PRODUCTS</p>
                    </motion.div>
                    <motion.div
                        className="w-full bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4 px-6"
                        onClick={() =>
                            window.scrollTo({
                                behavior: "smooth",
                                top: specialtyRef.current.offsetTop,
                            })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p>SPECIALTY</p>
                    </motion.div>
                    <motion.div
                        className="w-full bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4 px-6"
                        onClick={() =>
                            window.scrollTo({
                                behavior: "smooth",
                                top: testimonialsRef.current.offsetTop,
                            })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p>TESTIMONIALS</p>
                    </motion.div>
                </div>
            </div>
            <div className="py-12" ref={menuRef}>
                <Menu />
            </div>
            <div className="py-12" ref={specialtyRef}>
                <Specialty />
            </div>
            <div className="py-12" ref={aboutRef}>
                <About />
            </div>
            <div className="py-12" ref={testimonialsRef}>
                <Testimonies />
            </div>
            <ScrollToTop />
        </div>
    );
}
