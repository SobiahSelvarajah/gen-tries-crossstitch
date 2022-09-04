import './NavBar.scss';
import NavLogo from '../navLogo/NavLogo';
import NavLinks from '../navLinks/NavLinks';

export default function NavBar() {

    return (
        <nav className='navBar__section'>
            <NavLogo />
            <NavLinks />
            <div className='navBar__right'>a</div>
        </nav>
    )
}

