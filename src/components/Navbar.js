import React from "react";
import {
    BrowserRouter as Router,
    // Redirect,
    Route,
    Link,
    Switch
} from "react-router-dom";
// import Home from "../views/Home";
import Menu from "../views/Menu";
import Order from "../views/Order";
import About from "../views/About";

export default function Header() {
    return (
        <div>
            <Router>
                <ul>
                    {/* <li>
                        <Link to="/home">Home</Link>
                    </li> */}
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/order">Shop Coffee</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
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
