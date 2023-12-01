import React from 'react'

// @ts-ignore
import { Link } from "react-router-dom";
import {RoutesEnum} from "../../routes/routes.enum";


const Header =()=> {
    return (
        <>
            <header>
                <div className="links">
                    <Link to={RoutesEnum.Home}>Home</Link>
                    <Link to={RoutesEnum.Favorites}>Favorites</Link>
                    <Link to={RoutesEnum.Contact}>Contact us</Link>
                </div>
            </header>
            <div className="empty-space-header"></div>
        </>
    )
}

export default Header;