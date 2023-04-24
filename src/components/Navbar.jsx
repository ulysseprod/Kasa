import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(){
    return (
    <nav className= "navbar">
        <div className="navbar_logo">
            <img src="logo.jpg" alt="Logo"/>
        </div>
        <NavLink to="/">
            <div>Accueil</div>
        </NavLink>

        <NavLink to="/about">
            <div>A propos</div>
        </NavLink>
    </nav>
    );
}

export default Navbar;