import React from "react";
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";

function App() {
    return (
        <div className='App'>
            <Router>
                <Header/>
                <div className="p-3">
                    <Switch>
                        <Route exact path="/">
                            <Home name="name"/>
                        </Route>
                        <Route exact path="/about">
                            <About/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
