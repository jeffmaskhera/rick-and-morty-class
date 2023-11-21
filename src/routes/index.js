import React from 'react'
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Favorites from "../pages/favorites/favorites";
import Header from "../components/header/header";
import {RoutesEnum} from "./routes.enum";



const Routes =()=> {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={RoutesEnum.Home} component={Home} />
                <Route exact path={RoutesEnum.Favorites} component={Favorites} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes