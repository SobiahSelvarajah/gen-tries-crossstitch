import { Link } from 'react-router-dom';
import './NavLinks.scss';

export default function NavLinks() {
    const user = false;
    return(
        <ul className='navLinks__container'>
            <li className='navLinks__element'>
                <Link to='/' className='navLinks__link'>HOME</Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/about' className='navLinks__link'>ABOUT</Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/contact' className='navLinks__link'>CONTACT</Link>
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