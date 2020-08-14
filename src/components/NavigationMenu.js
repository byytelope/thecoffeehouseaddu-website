import React from "react";
import {Link} from "react-router-dom";

function NavigationMenu(props) {
    return(
        <ul>
            <li>
                <Link 
                    to="/" 
                    className="text-black py-3 border-t border-b block text-center" 
                    onClick={props.closeMenu}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                    to="/about" 
                    className="text-black py-3 border-b block text-center" 
                    onClick={props.closeMenu}
                >
                    About
                </Link>
            </li>
        </ul>
    );
}

export default NavigationMenu;