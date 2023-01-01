import './NavBar.scss';
import NavLogo from '../navLogo/NavLogo';
import NavLinks from '../navLinks/NavLinks';
import NavAuth from '../navAuth/NavAuth';
import NavBurger from '../navBurger/NavBurger';

export default function NavBar() {
    return (
        <header className='navBar__container'>
            <div className='navBar__top'>
                <NavLogo/>
                <NavAuth/>
                <NavBurger/>
            </div>
            <nav className='navBar__links'>
                <NavLinks />
            </nav>
        </header>
    )
} 