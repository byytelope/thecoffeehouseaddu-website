import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import PropTypes from "prop-types";
import MenuCard from "../components/MenuCard";

export default function Menu() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:5000/products");
            setData(await response.json());
        }
        fetchData();
    }, []);

    const Cards = () => {
        return (
            <AnimateSharedLayout>
                {data.map((content) => (
                    <motion.div
                        key={content.id}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 25 }}
                        transition={{ type: "spring", delay: 1 + (content.id / 10), stiffness: 200 }}
                    >
                        <MenuCard
                            cardImage={content.img}
                            cardName={content.name}
                            cardDesc={content.description}
                            cardPrice={content.price}
                            cardIsCold={content.is_cold}
                            cardIsHot={content.is_hot}
                        />
                    </motion.div>
                ))}
            </AnimateSharedLayout>
        );
    };

    return (
        <div>
            <div className="text-center font-semibold text-tch-gray-dk text-3xl xl:text-2xl pt-24 pb-20">
                <p>OUR PRODUCTS</p>
                <p className="text-xl font-light pt-8 -mb-12 mx-12 xl:mx-96">
                    Single-origin coffee brewed to perfection in the heart of Addu City, with
                    flavours from France, Brazil, Uganda and Ethiopia and our very own Maldives. We
                    are here to change the coffee-culture in Addu.
                </p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center space-y-2 md:space-y-0 lg:space-y-0 xl:space-y-0 md:space-x-6 lg:space-x-8 xl:space-x-8 font-semibold text-md text-tch-gray-dk pt-4 pb-12">
                <div className="w-auto shadow-md rounded-full p-2 px-4">#SINGLEORIGINCOFFEE</div>
                <div className="w-auto shadow-md rounded-full p-2 px-4">#ETHICALLYSOURCED</div>
            </div>
            <div className="flex justify-center p-6 px-8 sm:px-24 md:px-24 lg:px-24 xl:px-12 xl:overflow-x-auto">
                <motion.div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 pb-8">
                    <Cards />
                </motion.div>
            </div>
        </div>
    );
}

Menu.propTypes = {
    useAnim: PropTypes.object,
};
