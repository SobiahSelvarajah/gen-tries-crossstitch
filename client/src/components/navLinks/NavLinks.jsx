import { Link } from 'react-router-dom';
import './NavLinks.scss';

export default function NavLinks() {
    const user = true;
    return(
        <ul className='navLinks__container'>
            <li className='navLinks__element'>
                <Link to='/' className='navLinks__link'>HOME</Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/about' className='navLinks__link'>ABOUT</Link>
            </li>
            <li className='navLinks__element'>
                <Link to='/stitches' className='navLinks__link'>STITCHES</Link>
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