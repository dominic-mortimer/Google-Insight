import React from "react"
import "../Header/Header.scss"
import googleLogo from "../../assets/images/Google-logo-768x432.png"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={googleLogo} alt="googlelogo" />
                <p className="header__logo-text">Insight</p>
            </div>
            
            <nav className="navbar">
                <p className="navbar__main">Visualize Data</p>
                <ul className="navbar__list">
                    <NavLink exact to="/" activeClassName="navbar__link--active" className="navbar__link">
                        <li className="navbar__list-item">
                            Overview
                        </li>
                    </NavLink>
                    <a href="/" className="navbar__link">
                        <li className="navbar__list-item">
                            How It Works
                        </li>
                    </a>
                    <NavLink to="/map" activeClassName="navbar__link--active" className="navbar__link">
                        <li className="navbar__list-item">
                            View Data Maps
                        </li>
                    </NavLink>
                    <a href="/" className="navbar__link">
                        <li className="navbar__list-item">
                            Usages
                        </li>
                    </a>
                    <a href="/" className="navbar__link navbar__link--account">
                        <p className="navbar__list-item">
                            Google Account
                        </p>
                    </a>
                </ul>
            </nav>
        </header>
    );
}


export default Header;