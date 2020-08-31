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
                        cardName="Bela Vista"
                        cardDesc="Produced under best agricultural practices with full traceability, certified by Utz Good Inside, the farm producing this coffee sponsors a primary school to the worker’s children and the rural community which surrounds the farm. Fazenda Bela Vista Washed Yellow Burbon has notes of red fruit, mild acidity and a creamy body."
                    />
                    <MenuCard
                        cardImage={Image}
                        cardName="Capim Branco"
                        cardDesc="Grown in the Cerrado Mineiro region in Brazil, 1100 to 1250 meters above sea level, providing an ideal coffee production due to the perfect balance of wet and dry seasons. The volcanic environment in which the farm is in and the attentive husbandry produces uniform blossoming and maturation creating excellent conditions for processing the sweet, fruity coffee with slight hints of chocolate and orange notes."
                    />
                    <MenuCard
                        cardImage={Image}
                        cardName="Kisinga"
                        cardDesc="This naturally processed coffee has a real strawberry-forward character with delicate floral taste that rivals the best African produced coffee out there. Produced at high altitudes of 1600 – 1800 MASL which delivers a bright acidity that shines through even the boozy notes."
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center space-x-24 pt-8 mr-4">
                <p className="z-50 xl:-ml-12 mt-16 font-extrabold text-tch-gray-dk text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl xl:text-5.5xl">
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
