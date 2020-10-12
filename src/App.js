import React from "react";
import { Switch, Route } from "wouter";

import FourOFour from "./pages/404";
import Home from "./pages/Home";

import "./App.css";

export default function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/:rest*">
                    <FourOFour />
                </Route>
            </Switch>
        </div>
    );
}
