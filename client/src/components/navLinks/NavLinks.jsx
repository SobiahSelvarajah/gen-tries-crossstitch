import { Link } from 'react-router-dom';
import './NavLinks.scss';

export default function NavLinks() {
    const user = true;
    return(
        <ul className='navLinks__container'>
            <li className='navLinks__element'>
                <Link to='/' className='navLinks__link'>
                    HOME
                </Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/about' className='navLinks__link'>
                    ABOUT
                </Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/contact' className='navLinks__link'>
                    CONTACT
                </Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/myStitches' className='navLinks__link'>
                    MY STITCHES
                </Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/logout' className='navLinks__link'>
                    LOGOUT
                </Link>
            </li>
        </ul>
    )
}