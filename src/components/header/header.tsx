import React from 'react'

// @ts-ignore
import { Link } from "react-router-dom";
import {RoutesEnum} from "../../routes/routes.enum";


const Header =()=> {
    return (
        <header>
            <ul>
                <Link to={RoutesEnum.Home}>Home</Link>
                <Link to={RoutesEnum.Favorites}>Favorites</Link>
            </ul>
        </header>
    )
}

export default Header;