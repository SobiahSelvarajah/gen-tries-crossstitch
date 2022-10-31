import React from 'react';
import transparentLogo from '../../assets/gtc-logo-files/standard-logo-files/black-on-transparent.png';
import './FooterLogo.scss';

export default function FooterLogo() {
    return (
        <img
            className='footerLogo__logo'
            src={transparentLogo}
            alt='logo'
        >
        </img>
    )
}