import React from "react";
import MenuCard from "../components/MenuCard";
import Image from "../assets/img/card-top.jpg";

export default function Testimonies() {
    return (
        <div>
            <div className="text-center font-semibold text-tch-gray-dk text-3xl xl:text-2xl pt-24 pb-20 px-12 xl:p-24">
                <p>WHAT PEOPLE HAD TO SAY ABOUT OUR COFFEE</p>
            </div>
            <div className="flex justify-center p-6 px-8 sm:px-24 md:px-24 lg:px-24 xl:px-12 xl:overflow-x-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 pb-8">
                    <MenuCard
                        cardImage={Image}
                        cardName="Person 1"
                        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                    />
                    <MenuCard
                        cardImage={Image}
                        cardName="Person 2"
                        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                    />
                    <MenuCard
                        cardImage={Image}
                        cardName="Person 3"
                        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                    />
                </div>
            </div>
        </div>
    );
}
