import './NavBar.scss';
import NavLogo from '../navLogo/NavLogo';

export default function NavBar() {

    return (
        <nav className='navBar__section'>
            <NavLogo />
            <div className='navBar__center'>
                <a href='/'>
                    Home
                </a>
                <a href='/about'>
                    About
                </a>
                <a href='/contact'>
                    Contact
                </a>
                
            </div>
            <div className='navBar__right'>a</div>
        </nav>
    )

}

