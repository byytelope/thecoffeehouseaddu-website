import React from "react";
import MenuCard from "../components/MenuCard";
import Image from "../assets/img/card-top.jpg";
import Map from "../components/World";

export default function Menu() {
    return (
        <div>
            <div className="text-center font-semibold text-tch-gray-dk text-3xl xl:text-2xl pt-24 pb-20 xl:p-24">
                <p>OUR SPECIALTY</p>
            </div>
            <div className="flex justify-center p-6 px-8 sm:px-24 md:px-24 lg:px-24 xl:px-12 xl:overflow-x-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 pb-8">
                    <MenuCard
                        cardImage={Image}
                        cardName="Uganda"
                        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                    />
                    <MenuCard
                        cardImage={Image}
                        cardName="Brazil"
                        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                    />
                    <MenuCard
                        cardImage={Image}
                        cardName="Ethiopia"
                        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center space-x-24 pt-8 mr-4">
                <p className="z-50 xl:-ml-12 mt-16 font-header text-tch-gray-dk text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl xl:text-5.5xl">
                    &quot;&nbsp;WE ENSURE ETHICAL
                    <br />
                    &nbsp;&nbsp;FAIR-TRADE AT ALL
                    <br />
                    &nbsp;&nbsp;STAGES OF THE
                    <br />
                    &nbsp;&nbsp;PRODUCTION
                    <br />
                    &nbsp;&nbsp;PROCESS&nbsp;&quot;
                </p>
                <div className="max-w-xl mr-80 z-0 mt-48 fill-current hidden xl:flex">
                    <Map />
                </div>
            </div>
        </div>
    );
}
