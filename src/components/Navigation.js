import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareDown} from "@fortawesome/free-regular-svg-icons";
import {useTransition, animated} from "react-spring";
import NavigationMenu from "./NavigationMenu";

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const menuTransitions = useTransition(showMenu, null, {
        from: {position: "absolute", opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    });
    
    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon = {faCaretSquareDown}
                    onClick = {() => setShowMenu(!showMenu)}
                />
            </span>

            {menuTransitions.map(({item, key, props}) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed inset-0 w-full h-full"
                    onClick={() => setShowMenu(false)}
                >
                </animated.div>
            )}

            {menuTransitions.map(({item, key, props}) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed bg-white inset-x-0 inset-y-auto w-full h-auto shadow"
                >   
                    <NavigationMenu
                        closeMenu = {() => setShowMenu(false)}
                    />
                </animated.div>
            )}
        </nav>
    );
}

export default Navigation;