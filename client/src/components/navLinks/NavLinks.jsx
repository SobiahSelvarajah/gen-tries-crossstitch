import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLinks() {
    const user = false;
    return(
        <ul className='navLinks__container'>
            <li className='navLinks__element'>
                <Link to='/' className='navLinks__link'>HOME</Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/aboutus' className='navLinks__link'>ABOUT US</Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/stitches' className='navLinks__link'>STITCHES</Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/community' className='navLinks__link'>COMMUNITY TAB</Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/write' className='navLinks__link'>WRITE</Link>
            </li>
            <li className='navLinks__element'>
                {user && 'LOGOUT'}
            </li>
        </ul>
    )
}