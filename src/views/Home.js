import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import "../assets/css/HighlightNone.css";
import { Header, Buttons } from "../components/Header";
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

    const btnData = [
        { id: 1, text: "OUR STORY", ref: aboutRef.current },
        { id: 2, text: "PRODUCTS", ref: menuRef.current },
        { id: 3, text: "SPECIALTY", ref: specialtyRef.current },
        { id: 4, text: "CONTACT US", ref: footerRef.current },
    ];

    return (
        <div>
            <div>{cardAnimStart()}</div>
            <div>
                <Header />
            </div>
            <div className="flex justify-center px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-8 select-none highlight-none">
                    <Buttons btnData={btnData} />
                </div>
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
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
