import React from "react";
import MenuCard from "../components/MenuCard";
import Image from "../assets/img/card-top.jpg";

export default function Testimonies() {
    return (
        <div>
            <div className="text-center text-4xl font-semibold text-tch-gray-dk md:text-6xl xl:text-2xl pt-32 pb-20 xl:p-24">
                <text>CATERING TO ALL COFFEE LOVERS</text>
            </div>
            <div className="flex justify-center items-center flex-col xl:flex-row p-6 space-x-0 xl:space-x-24 space-y-8 md:space-y-12 xl:space-y-0">
                <MenuCard 
                    image={Image}
                    drinkName="Person 1"
                    drinkDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                />
                <MenuCard 
                    image={Image} 
                    drinkName="Person 2"
                    drinkDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                />
                <MenuCard 
                    image={Image} 
                    drinkName="Person 3"
                    drinkDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                />
            </div>
        </div>
    );
}
