import React from "react";

import MenuCard from "../components/MenuCard";

import IMGKisinga from "../assets/img/specialty/Kisinga.webp";
import IMGBelaVista from "../assets/img/specialty/Bela_Vista.webp";
import IMGCapimBranco from "../assets/img/specialty/Capim_Branco.webp";

export default function Menu() {
    const data = [
        {
            id: 1,
            img: [IMGKisinga],
            name: "Kisinga",
            description:
                "This naturally processed coffee has a real strawberry-forward character with delicate floral taste that rivals the best African produced coffee out there. Produced at high altitudes of 1600 – 1800 MASL, delivering a bright acidity that shines through even the boozy notes.",
        },
        {
            id: 2,
            img: [IMGBelaVista],
            name: "Bela Vista",
            description:
                "Produced under best agricultural practices with full traceability, certified by Utz Good Inside, the farm producing this coffee sponsors a primary school to the worker's children and the rural community which surrounds the farm. Fazenda Bela Vista Washed Yellow Burbon has notes of red fruit, mild acidity and a creamy body.",
        },
        {
            id: 3,
            img: [IMGCapimBranco],
            name: "Capim Branco",
            description:
                "Grown in the Cerrado Mineiro region in Brazil, 1100 to 1250 meters above sea level, providing an ideal coffee production due to the perfect balance of wet and dry seasons. The volcanic environment in which the farm is in and the attentive husbandry produces uniform blossoming and maturation creating excellent conditions for processing the sweet, fruity coffee with slight hints of chocolate and orange notes.",
        },
    ];

    const Cards = () => {
        return data.map((content) => (
            <MenuCard
                key={content.id}
                cardImages={content.img}
                cardName={content.name}
                cardDesc={content.description}
            />
        ));
    };

    return (
        <div>
            <div className="text-center font-semibold text-tch-gray-dk dark:text-tch-gray-md text-3xl xl:text-2xl pt-24 pb-20 xl:p-24">
                <p>OUR SPECIALTY</p>
                <p className="text-xl font-light pt-8 -mb-12 mx-12">
                    We ensure ethical fair-trade at all stages of the production process.
                </p>
            </div>
            <div className="flex justify-center p-6 px-8 sm:px-24 md:px-24 lg:px-24 xl:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 pb-8">
                    <Cards />
                </div>
            </div>
        </div>
    );
}
