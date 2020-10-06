import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import Buttons from "../components/Buttons";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

import About from "../views/About";
import Footer from "../views/Footer";
import Loyalty from "../views/Loyalty";
import Menu from "../views/Menu";
import Specialty from "../views/Specialty";

import "../assets/css/HighlightNone.css";

import { LoyaltyContext } from "../contexts/LoyaltyContext";

export default function Home() {
    const menuRef = useRef();
    const specialtyRef = useRef();
    const aboutRef = useRef();
    const loyaltyRef = useRef();
    const footerRef = useRef();

    const [renderLoyalty, setRenderLoyalty] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            const response = await axios.get(
                "https://google-photos-album-demo2.glitch.me/v3jsgKUCsjbpbMZW7"
            );
            setImages(await response.data);
        }
        fetchImages();
    }, []);

    const btnData = [
        { id: 5, text: "LOYALTY", ref: loyaltyRef.current },
        { id: 1, text: "OUR STORY", ref: aboutRef.current },
        { id: 2, text: "PRODUCTS", ref: menuRef.current },
        { id: 3, text: "SPECIALTY", ref: specialtyRef.current },
        { id: 4, text: "CONTACT US", ref: footerRef.current },
    ];

    return (
        <div className="dark:bg-tch-dark-surface">
            <LoyaltyContext.Provider value={{ renderLoyalty, setRenderLoyalty }}>
                <div>
                    <Header headerLogo={images[0]} />
                </div>
                <div className="flex justify-center px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-8 select-none highlight-none">
                        <Buttons btnData={btnData} />
                    </div>
                </div>
            </LoyaltyContext.Provider>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                <div ref={menuRef}>
                    <Menu images={images} />
                </div>
                <div ref={specialtyRef}>
                    <Specialty images={images} />
                </div>
                <div ref={aboutRef}>
                    <About />
                </div>
                <LoyaltyContext.Provider value={{ renderLoyalty, setRenderLoyalty }}>
                    <div ref={loyaltyRef}>
                        <Loyalty />
                    </div>
                </LoyaltyContext.Provider>
                <div ref={footerRef} className="pt-8">
                    <Footer />
                </div>
            </motion.div>
            <ScrollToTop />
        </div>
    );
}
