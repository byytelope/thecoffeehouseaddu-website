import React from "react";
import IngredientCards from "../components/IngredientCards";

export default function Menu() {
    return (
        <div>
            <div className="text-center text-4xl text-gray-700 p-24">./Ingredients</div>
            <p className="text-center text-3xl text-gray-800 p-24">
                All our coffee is sourced 100% ethically
                <span role="img" aria-label="heart"> ❤️ </span>
            </p>
            <IngredientCards/>
        </div>
    );
}
