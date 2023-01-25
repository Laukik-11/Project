import React from "react";
import {Link, NavLink } from "react-router-dom";
import img1 from "../assets/icons8-hamburger-menu-48.png"
import img2 from "../assets/icons8-multiply-48.png"


function Header(){
    const [burgerDis,setBurgerDis] = React.useState(true)

    function handleClick(){

        setBurgerDis(prevBurgerDis=>!prevBurgerDis)
    }
    return(
        <nav className={burgerDis?"":"nav-right"}>
        <h1 className={burgerDis?"title":"title hidden"}>GANIT - NIT JALANDHAR</h1>
        <Link to="/" className={burgerDis?"toggle-button open":"toggle-button"} onClick={handleClick} >
            <img src={img1} alt="" />
        </Link>
        <Link to="/" className={burgerDis?"toggle-button":"toggle-button open"} onClick={handleClick} >
            <img src={img2} alt="" />
        </Link>
        <ul className={burgerDis?"nav-links hidden":"nav-links full-height"}>
            <li>
                <NavLink className="link" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Header