import mainLogo from '../../assets/gtc-logo-files/resizable-vector-files/original.svg';
import './NavLogo.scss';

export default function NavLogo() {
    return(
        <a className='navLogo__link' href='/'>
            <img
                className='navLogo__element'
                src={mainLogo}
                alt='logo' 
            />                
        </a>
    )
}