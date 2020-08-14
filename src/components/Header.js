import React from "react";
import Navigation from "./Navigation";

function Header() {
    return(
        <header className="p-3 flex justify-between items-center shadow">
            <span className="font-bold">
                App
            </span>
            <Navigation/>
        </header>
    );
}

export default Header;