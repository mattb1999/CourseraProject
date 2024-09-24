import React from "react";
import { Link } from 'react-router-dom';
import bannerImg from '../images/banner.png'

const Header = () => {
    return(
        <header className="header"> 
            <section>
            <div className="banner">
                <h2>Italian's Sea ⚓️</h2>
                <h5>RESTAURANT</h5>
                <p>Welcome to Italian's Sea, where fresh Mediterranean seafood meets Italian culinary tradition.</p>
                <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
            </div>

            <div className="banner-img">
                <img src={bannerImg} alt=""/>
            </div>

            </section>
        </header>
    );
}
export default Header;