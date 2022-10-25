import './NavBar.scss';
import NavLogo from '../navLogo/NavLogo';
import NavLinks from '../navLinks/NavLinks';
import NavAuth from '../navAuth/NavAuth';

export default function NavBar() {
    return (
        <nav className='navBar__container'>
            <div className='navBar__top'>
                <NavLogo />
                <NavAuth />                
            </div>
            <div className='navBar__links'>
                <NavLinks />
            </div>
        </nav>
    )
} 