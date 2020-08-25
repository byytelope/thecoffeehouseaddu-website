import React, { useRef } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import About from "./About";
import Menu from "./Menu";
import Specialty from "./Specialty";
import Testimonies from "./Testimonials";
import Footer from "./Footer";
import "../assets/css/NavBtn.css";

// import Background from "../assets/img/Background.jpg";

export default function Home() {
    const menuRef = useRef();
    const specialtyRef = useRef();
    const aboutRef = useRef();
    const footerRef = useRef();
    // style={{backgroundImage:` url(${Background})`}}
    //  flex-col md:flex-row lg:flex-row xl:flex-row space-x-0 md:space-x-12 lg:space-x-12 xl:space-x-18 space-y-8 md:space-y-0 lg:space-y-0 xl:space-y-0
    return (
        <div>
            <Header />
            <div className="flex justify-center px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-8">
                    <motion.div
                        className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4 px-6"
                        onClick={() =>
                            window.scrollTo({ behavior: "smooth", top: aboutRef.current.offsetTop })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p>OUR STORY</p>
                    </motion.div>
                    <motion.div
                        className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4 px-6"
                        onClick={() =>
                            window.scrollTo({ behavior: "smooth", top: menuRef.current.offsetTop })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p>PRODUCTS</p>
                    </motion.div>
                    <motion.div
                        className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4 px-6"
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
                        className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer py-4 px-6"
                        onClick={() =>
                            window.scrollTo({
                                behavior: "smooth",
                                top: footerRef.current.offsetTop,
                            })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p>CONTACT US</p>
                    </motion.div>
                </div>
            </div>
            <div ref={menuRef}>
                <Menu />
            </div>
            <div ref={specialtyRef}>
                <Specialty />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div>
                <Testimonies />
            </div>
            <div ref={footerRef}>
                <Footer />
            </div>
            <ScrollToTop />
        </div>
    );
}
