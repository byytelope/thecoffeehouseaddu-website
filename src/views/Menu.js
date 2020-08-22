import React from "react";
import MenuCard from "../components/MenuCard";
import Image from "../assets/img/card-top.jpg";

export default function Menu() {
    return (
        <div>
            <div className="text-center text-4xl font-semibold text-tch-gray-dk md:text-6xl xl:text-2xl pt-32 pb-20 xl:p-24">
                <text>OUR PRODUCTS</text>
                <p className="text-xl font-light pt-8 -mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="flex justify-center items-center flex-col xl:flex-row p-6 space-x-0 xl:space-x-24 space-y-8 md:space-y-12 xl:space-y-0">
                <MenuCard 
                    image={Image} 
                    drinkName="Ehbandi Brew"
                />
                <MenuCard 
                    image={Image} 
                    drinkName="Love Brew"
                />
                <MenuCard 
                    image={Image} 
                    drinkName="Heartattack"
                />
            </div>
        </div>
    );
}
