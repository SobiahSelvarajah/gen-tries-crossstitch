import React from 'react';
import { Link } from 'react-router-dom';
import transparentLogo from '../../assets/gtc-logo-files/standard-logo-files/black-on-transparent.png';
import './FooterLogo.scss';

export default function FooterLogo() {
    return (
        <Link className='footerLogo__logoLink' to='/'>
            <img
                className='footerLogo__logo'
                src={transparentLogo}
                alt='logo'
            >
            </img>
        </Link>
    )
}