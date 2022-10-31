import React from 'react';
// import { Link } from 'react-router-dom';
import FooterLogo from '../footerLogo/FooterLogo';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer__container'>
            <div className='footer__logoSocials'>
                <FooterLogo />                
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