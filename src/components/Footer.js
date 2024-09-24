import React from 'react';
import logo from '../images/logo2.png';
const Footer = () => {
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='' className='immagine'/>
                    <p>We are a family owned Mediterranean restaurant, focused on Sea Food</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/>987 Romecity, Italy</li>
                        <li>Phone: <br/>++ 39 12345678</li>
                        <li>Email: <br/>ItalianSea@mail.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;