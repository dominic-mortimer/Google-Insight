import React from "react"
import "../Header/Header.scss"
import googleLogo from "../../assets/images/Google-logo-768x432.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header__body">
            <p className="header__title"><img className="header__logo" src={googleLogo} alt="googlelogo" /> Insights</p>
            <div className="header__navbar">

                <p className="visualise__style">Visualize My Data</p>
                <div className="navbar__body">
                    <Link to="/" activeclassName="overview__style">
                        <p>Overview</p>
                    </Link>
                    <p>How It Works</p>
                    <Link to="/map" activeclassName="map__style">
                        <p>See My Map</p>
                    </Link>
                </div>
                <p className="account__style">Google Account</p>

            </div>
        </div>
    );
}


export default Header;