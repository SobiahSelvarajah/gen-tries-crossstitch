import './NavLinks.scss';

export default function NavLinks() {
    return(
        <div className='navLinks__container'>
            <a
                className='navLinks__element' 
                href='/'>
                HOME
            </a>
            <a 
                className='navLinks__element'
                href='/about'>
                ABOUT
            </a>
            <a 
                className='navLinks__element'
                href='/contact'>
                CONTACT
            </a>
            <a 
                className='navLinks__element'
                href='/write'>
                WRITE
            </a>
            <a 
                className='navLinks__element'
                href='/logout'>
                LOGOUT
            </a>
        </div>
    )
}