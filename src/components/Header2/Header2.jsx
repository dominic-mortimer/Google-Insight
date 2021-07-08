import React from "react"
import "./Header2.scss"
import googleLogo from "../../assets/images/Google-logo-768x432.png"
import { Link } from "react-router-dom"

function Header2() {
    return (
        <div className="header2">
            <div className="header2__logo">
                <img className="header2__logo-img" src={googleLogo} alt="googlelogo" />
                <p className="header2__logo-text">Insight</p>
            </div>


            <div className="header__navbar">

                <p>Visualize My Data</p>
                <div className="navbar__body">
                    <Link to="/" className="overview__style">
                        <p>Overview</p>
                    </Link>
                    <p>How It Works</p>
                    <Link to="/map" className="map__style">
                        <p>See My Map</p>
                    </Link>
                </div>
                <p className="account__style">Google Account</p>

            </div>
        </div>
    );
}


export default Header2;