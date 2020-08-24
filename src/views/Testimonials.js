import React from "react";
import MenuCard from "../components/MenuCard";
import Image from "../assets/img/card-top.jpg";

export default function Testimonies() {
    return (
        <div>
            <div className="text-center font-semibold text-tch-gray-dk text-3xl xl:text-2xl pt-32 pb-20 xl:p-24">
                <p>CATERING TO ALL COFFEE LOVERS</p>
            </div>
            <div className="flex justify-center p-6 px-8 sm:px-24 md:px-24 lg:px-24 xl:px-0 xl:overflow-x-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 pb-8">
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
        </div>
    );
}
