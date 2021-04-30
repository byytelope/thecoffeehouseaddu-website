import { useRef } from "react";
import { motion } from "framer-motion";

import Button from "../components/Button";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

import About from "../views/About";
import Footer from "../views/Footer";
import Menu from "../views/Menu";
import Speciality from "../views/Speciality";

import "../assets/css/HighlightNone.css";

export default function Home() {
    const menuRef = useRef();
    const specialityRef = useRef();
    const aboutRef = useRef();
    const footerRef = useRef();

    const btnData = [
        { id: 1, text: "OUR STORY", ref: aboutRef },
        { id: 2, text: "PRODUCTS", ref: menuRef },
        { id: 3, text: "SPECIALTY", ref: specialityRef },
        { id: 4, text: "CONTACT US", ref: footerRef },
    ];

    return (
        <div className="dark:bg-tch-dark-surface">
            <div>
                <Header delay={2.5} />
            </div>
            <div className="flex justify-center px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-8 select-none highlight-none">
                    <Button btnData={btnData} />
                </div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                <div ref={menuRef}>
                    <Menu />
                </div>
                <div ref={specialityRef}>
                    <Speciality />
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
