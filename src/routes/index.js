import React from 'react'
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Favorites from "../pages/favorites/favorites";
import Header from "../components/header/header";
import {RoutesEnum} from "./routes.enum";
import ContactUs from "../pages/contact/contact-us";



const Routes =()=> {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={RoutesEnum.Home} component={Home} />
                <Route exact path={RoutesEnum.Favorites} component={Favorites} />
                <Route exact path={RoutesEnum.Contact} component={ContactUs} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes