import './NavBar.scss';
import NavLogo from '../navLogo/NavLogo';
import NavLinks from '../navLinks/NavLinks';
import NavRight from '../navRight/NavRight';

export default function NavBar() {
    return (
        <nav className='navBar__section'>
            <NavLogo />
            <NavLinks />
            <NavRight />
        </nav>
    )
} 