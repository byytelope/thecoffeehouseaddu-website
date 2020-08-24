import React from "react";
import MenuCard from "../components/MenuCard";
import Image from "../assets/img/card-top.jpg";

export default function Menu() {
    return (
        <div>
            <div className="text-center font-semibold text-tch-gray-dk text-3xl xl:text-2xl pt-32 pb-20 xl:p-24">
                <p>OUR PRODUCTS</p>
                <p className="text-xl font-light pt-8 -mb-12 mx-12 xl:mx-96">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="flex justify-center p-6 px-8 sm:px-24 md:px-24 lg:px-24 xl:px-0 xl:overflow-x-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 pb-8">
                    <MenuCard image={Image} drinkName="Ehbandi Brew" drinkDesc="" />
                    <MenuCard image={Image} drinkName="Ehbandi Brew" drinkDesc="" />
                    <MenuCard image={Image} drinkName="Ehbandi Brew" drinkDesc="" />
                    <MenuCard image={Image} drinkName="Ehbandi Brew" drinkDesc="" />
                </div>
            </div>
        </div>
    );
}
