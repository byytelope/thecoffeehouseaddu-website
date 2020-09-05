import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import "../assets/css/HighlightNone.css";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import About from "./About";
import Footer from "./Footer";
import Menu from "./Menu";
import Specialty from "./Specialty";

export default function Home() {
    const menuRef = useRef();
    const specialtyRef = useRef();
    const aboutRef = useRef();
    const footerRef = useRef();
    const useAnim = useAnimation();

    const cardAnimStart = () => {
        useAnim.start("cardPosFinal");
    };
    const cardAnimList = {
        cardPosInit: {
            transition: {
                delayChildren: 0,
                staggerChildren: 0.3,
            },
        },
        cardPosFinal: {
            zIndex: 1,
            transition: {
                delayChildren: 1.0,
                staggerChildren: 0.1,
            },
        },
    };
    const cardAnimItem = {
        cardPosInit: { opacity: 0, y: 25 },
        cardPosFinal: { opacity: 1, y: 0 },
    };
    const fadeInList = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 2,
            },
        },
    };

    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            const response = await axios.get(
                "https://google-photos-album-demo2.glitch.me/v3jsgKUCsjbpbMZW7"
            );
            setImages(response.data);
        }
        fetchImages();
    }, []);

    return (
        <div>
            <div>{cardAnimStart()}</div>
            <motion.div initial="cardPosInit" animate={useAnim} variants={cardAnimList}>
                <motion.div variants={cardAnimItem}>
                    <Header />
                </motion.div>
            </motion.div>
            <div className="flex justify-center px-8">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-8 select-none highlight-none"
                    initial="cardPosInit"
                    animate={useAnim}
                    variants={cardAnimList}
                >
                    <motion.div
                        className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer transition-colors transition-shadow duration-150 ease-in-out py-4 px-6"
                        onClick={() =>
                            window.scrollTo({ behavior: "smooth", top: aboutRef.current.offsetTop })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 150 }}
                        variants={cardAnimItem}
                    >
                        <p>OUR STORY</p>
                    </motion.div>
                    <motion.div
                        className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer transition-colors transition-shadow duration-150 ease-in-out py-4 px-6"
                        onClick={() =>
                            window.scrollTo({ behavior: "smooth", top: menuRef.current.offsetTop })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 150 }}
                        variants={cardAnimItem}
                    >
                        <p>PRODUCTS</p>
                    </motion.div>
                    <motion.div
                        className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer transition-colors transition-shadow duration-150 ease-in-out py-4 px-6"
                        onClick={() =>
                            window.scrollTo({
                                behavior: "smooth",
                                top: specialtyRef.current.offsetTop,
                            })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 150 }}
                        variants={cardAnimItem}
                    >
                        <p>SPECIALTY</p>
                    </motion.div>
                    <motion.div
                        className="w-full-sm rounded-lg bg-tch-gray-lt hover:bg-tch-gray-md hover:shadow-lg text-center text-tch-gray-dk text-xl font-header cursor-pointer transition-colors transition-shadow duration-150 ease-in-out py-4 px-6"
                        onClick={() =>
                            window.scrollTo({
                                behavior: "smooth",
                                top: footerRef.current.offsetTop,
                            })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 150 }}
                        variants={cardAnimItem}
                    >
                        <p>CONTACT US</p>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" variants={fadeInList}>
                <div ref={menuRef}>
                    <Menu useAnim={useAnim} images={images} />
                </div>
                <div ref={specialtyRef}>
                    <Specialty images={images} />
                </div>
                <div ref={aboutRef}>
                    <About />
                </div>
                <div ref={footerRef} className="pt-8">
                    <Footer />
                </div>
            </motion.div>
            <ScrollToTop />
        </div>
    );
}
