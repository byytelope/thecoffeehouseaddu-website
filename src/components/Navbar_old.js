import React, { useRef } from "react";
import {
    BrowserRouter as Router,
    // Redirect,
    Route,
    Link,
    Switch,
} from "react-router-dom";
// import Home from "../views/Home";
import Menu from "../views/Menu";
import Order from "../views/Order";
import About from "../views/About";

import HomeText from "../components/HomeText";

import "../assets/css/Logo.css";
import Logo from "../assets/img/Thumb_TCHM_transparent.png";


export default function Header() {
    const logoRef = useRef();
    return (
        <div>
            <Router>
                <div className="w-full bg-gray-100">
                    <div className="flex justify-center py-8" ref={logoRef} onClick={() => window.scrollTo({ behavior: "smooth", top: logoRef.current.offsetTop })}>
                        <img className="photo" src={Logo} alt="Logo"/>
                    </div>
                    <HomeText/>
                    <div className="flex justify-center py-8">
                        <ul className="flex justify-center text-xl text-gray-700 max-w-sm rounded overflow-hidden border bg-gray-300">
                            {/* <li>
                                <Link to="/home">Home</Link>
                            </li> */}
                            <li className="font-bold p-4">
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li className="font-bold p-4">
                                <Link to="/order">Order Now</Link>
                            </li>
                            <li className="font-bold p-4">
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Switch>   
                    {/* <Route exact path="/home" component={Home}/> */}
                    <Route exact path="/menu" component={Menu}/>
                    <Route exact path="/order" component={Order}/>
                    <Route exact path="/about" component={About}/>
                    {/* <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route> */}
                </Switch>
            </Router>
        </div>
    );
}
