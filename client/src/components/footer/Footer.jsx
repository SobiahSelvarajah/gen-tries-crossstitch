import React from 'react';
import FooterLinks from '../footerLinks/FooterLinks';
import FooterLogo from '../footerLogo/FooterLogo';
import Socials from '../socials/Socials';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer__container'>
            <div className='footer__logoSocials'>
                <FooterLogo />   
                <Socials />             
            </div>
            <FooterLinks />
        </footer>
    )
}