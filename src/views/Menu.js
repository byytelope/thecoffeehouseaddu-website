import React from "react";
import { motion } from "framer-motion";

import MenuCard from "../components/MenuCard";

import IMGColdBrewTonic from "../assets/img/products/Cold_Brew_Tonic.webp";
import IMGFilterCoffe from "../assets/img/products/Filter_Coffee.webp";
import IMGSparklingCoffee from "../assets/img/products/Sparkling_Coffee.webp";
import IMGJapaneseIcedCoffee from "../assets/img/products/Japanese_Cold_Brew.webp";
import IMGVietnameseBrew from "../assets/img/products/Vietnamese_Brew.webp";
import IMGKaishiMetaa from "../assets/img/products/Kaishi_Metaa.webp";
import IMGClassicPeachMojito from "../assets/img/products/Classic_Peach_Mojito.webp";
import IMGBrownies1 from "../assets/img/products/Chocolate-Fudge_Brownie_1.webp";
import IMGBrownies2 from "../assets/img/products/Chocolate-Fudge_Brownie_2.webp";
import IMGBrownies3 from "../assets/img/products/Chocolate-Fudge_Brownie_3.webp";

const Menu = React.memo(function Menu() {
    const data = [
        {
            id: 1,
            img: [IMGColdBrewTonic],
            name: "Cold-brew Tonic",
            description:
                "Brewed over fifteen hours, this cold brew tonic has slight notes of cherry, chocolate and stronger notes of dried plum in fusion with sparkling tonic water to quench your thirst in the tropical weather of Maldives.",
            price: 40,
            is_cold: true,
        },
        {
            id: 2,
            img: [IMGFilterCoffe],
            name: "Filter Coffee",
            description:
                "Sourced from countries like Brazil, Tanzania, Uganda and Ethiopia, our filter coffee is hand-brewed and filtered to get a coffee that is clear, light-bodied and flavorful while retaining all the notes of the coffee bean.",
            price: 30,
            is_hot: true,
        },
        {
            id: 3,
            img: [IMGSparklingCoffee],
            name: "Sparkling Coffee",
            description:
                "Whoever said a blend of coffee and a fizzy drink can't go well, hasn't tried our Sparkling Coffee yet; which consists of a flavourful cold brew with a mixed-berry syrup concoction, packing a punch of fizziness.",
            price: 45,
            is_cold: true,
        },
        {
            id: 4,
            img: [IMGJapaneseIcedCoffee],
            name: "Japanese Iced-Coffee",
            description:
                "Japanese Iced-Coffee is made with a method used by the Japanese to brew coffee and to instantly cool it down in the process, allowing us to extract flavorful notes from the beans in minutes rather than hours.",
            price: 35,
            is_cold: true,
        },
        {
            id: 5,
            img: [IMGVietnameseBrew],
            name: "Vietnamese Brew",
            description:
                "The perfect fusion of coffee and milk, made with one of the most famous street-style methods of brewing coffee in Vietnam; this coffee consists of single-origin filter coffee to a small ratio of sweetened condensed milk.",
            price: 40,
            is_cold: true,
            is_hot: true,
        },
        {
            id: 6,
            img: [IMGKaishiMetaa],
            name: "Kaishi Metaa",
            description:
                "Cold-brew coffee infused with Maldivian culture; this drink will remind you of a Maldivian's humble beginnings. The drink consists of cold-brew coffee with a home-made coconut infusion and coconut milk.",
            price: 45,
            is_cold: true,
        },
        {
            id: 7,
            img: [IMGClassicPeachMojito],
            name: "Classic Peach Mojito",
            description:
                "Our first non-coffee; the Classic Peach Mojito consists of a cocktail-like mixture of peaches, lime-wedges and mint leaves. This drink is perfect to quench your thirst on a sunny day, delivering an exquisite sweet taste complimenting the mint flavour along with it.",
            price: 45,
            is_cold: true,
        },
        {
            id: 8,
            img: [IMGBrownies1, IMGBrownies2, IMGBrownies3],
            name: "Chocolate-Fudge Brownies",
            description:
                "Made from scratch and with lots of love, these delicious and gooey chocolate fudge brownies are a definite must-try for anyone with chocolate cravings.",
            price: 30,
            is_food: true,
            sale_price: 27,
        },
    ];

    const Cards = () => {
        return data.map((content) => (
            <motion.div
                key={content.id}
                className="flex"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    delay: 2.2 + content.id / 10,
                    stiffness: 200,
                }}
            >
                <MenuCard
                    key={content.id}
                    cardImages={content.img}
                    cardName={content.name}
                    cardDesc={content.description}
                    cardPrice={content.price}
                    cardSalePrice={content.sale_price}
                    cardIsCold={content.is_cold}
                    cardIsHot={content.is_hot}
                    cardIsFood={content.is_food}
                />
            </motion.div>
        ));
    };

    return (
        <div>
            <div className="text-center font-semibold text-tch-gray-dk dark:text-tch-gray-md text-3xl xl:text-2xl pt-24 pb-20">
                <p>OUR PRODUCTS</p>
                <p className="text-xl font-light pt-8 -mb-12 mx-12">
                    Single-origin coffee brewed to perfection in the heart of Addu City, with
                    flavours from France, Brazil, Uganda and Ethiopia and our very own Maldives. We
                    are here to change the coffee-culture in Addu.
                </p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center space-y-2 md:space-y-0 lg:space-y-0 xl:space-y-0 md:space-x-6 lg:space-x-8 xl:space-x-8 font-header text-base text-tch-gray-dk dark:text-tch-gray-md pt-4 pb-12">
                <div className="w-auto dark:bg-tch-dark-surface-1 shadow-md rounded-full pt-2 pb-1 px-4">
                    #ETHICALLYSOURCED
                </div>
                <div className="w-auto dark:bg-tch-dark-surface-1 shadow-md rounded-full pt-2 pb-1 px-4">
                    #SINGLEORIGINCOFFEE
                </div>
            </div>
            <div className="flex justify-center p-6 px-8 sm:px-24 md:px-24 lg:px-24 xl:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 pb-8">
                    <Cards />
                </div>
            </div>
        </div>
    );
});

export default Menu;
