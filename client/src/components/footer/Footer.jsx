import React from 'react';
import { Link } from 'react-router-dom';
import transparentLogo from '../../assets/gtc-logo-files/standard-logo-files/black-on-transparent.png';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer__container'>
            <div className="footer__logoSocials">
                <Link className='footer__logoLink' to='/'>
                    <img 
                        className='footer__logo'
                        src={transparentLogo}
                        alt='logo'
                        >
                    </img>                
                </Link>                
            </div>
            <div className='footer__linksContainer'>
                <ul className='footer__links'>
                    <li className='footer__link'>
                        Home
                    </li>
                    <li className='footer__link'>
                        About Us
                    </li>
                    <li className='footer__link'>
                        Gallery
                    </li>
                </ul>
            </div>
            <div className='footer__linksContainer'>
                <ul className='footer__links'>
                    <li className='footer__link'>
                        Terms and Rules
                    </li>
                    <li className='footer__link'>
                        Contact Us
                    </li>
                </ul>
            </div>
        </footer>
    )
}