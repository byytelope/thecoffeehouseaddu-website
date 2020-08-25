import React from "react";
import MenuCard from "../components/MenuCard";
import IMG_Coldbrew_Tonic from "../assets/img/products/Cold-brew_Tonic.jpg";
import IMG_Filter_Coffee from "../assets/img/products/Filter_Coffee.jpg";
import IMG_Toasted_Coconut from "../assets/img/products/Toasted_Coconut.jpg";
import IMG_Vietnamese_Brew from "../assets/img/products/Vietnamese_Brew.jpg";

export default function Menu() {
    const coldBrewDesc =
        "Brewed over fifteen hours, this cold brew tonic has slight notes of cherry, chocolate and stronger notes of dried plum in fusion with sparkling tonic water to quench your thirst in the tropical weather of Maldives.";
    const filterCoffeeDesc =
        "Sourced from countries like Brazil, Tanzania, Uganda and Ethiopia, our filter coffee is hand-brewed and filtered to get a coffee that is clear, light-bodied and flavorful while retaining all the notes of the coffee bean.";
    const toastedCocoDesc =
        "Cold-brew coffee infused with Maldivian culture; this drink will remind you of a Maldivian's humble beginnings. The drink consists of cold-brew coffee with a home-made coconut infusion and coconut milk.";
    const vietBrewDesc =
        "The perfect fusion of coffee and milk, made with one of the most famous street-style methods of brewing coffee in Vietnam; this coffee consists of single-origin filter coffee to a small ratio of sweetened condensed milk.";

    return (
        <div>
            <div className="text-center font-semibold text-tch-gray-dk text-3xl xl:text-2xl pt-24 pb-20">
                <p>OUR PRODUCTS</p>
                <p className="text-xl font-light pt-8 -mb-12 mx-24 xl:mx-96">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="flex justify-center p-6 px-8 sm:px-24 md:px-24 lg:px-24 xl:px-12 xl:overflow-x-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 pb-8">
                    <MenuCard
                        cardImage={IMG_Coldbrew_Tonic}
                        cardName="Cold-brew Tonic"
                        cardDesc={coldBrewDesc}
                    />
                    <MenuCard
                        cardImage={IMG_Filter_Coffee}
                        cardName="Filter Coffee"
                        cardDesc={filterCoffeeDesc}
                    />
                    <MenuCard
                        cardImage={IMG_Toasted_Coconut}
                        cardName="Toasted Coconut"
                        cardDesc={toastedCocoDesc}
                    />
                    <MenuCard
                        cardImage={IMG_Vietnamese_Brew}
                        cardName="Vietnamese Brew"
                        cardDesc={vietBrewDesc}
                    />
                </div>
            </div>
        </div>
    );
}
