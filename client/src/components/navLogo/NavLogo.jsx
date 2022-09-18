import { Link } from 'react-router-dom';
import mainLogo from '../../assets/gtc-logo-files/resizable-vector-files/original.svg';
import './NavLogo.scss';

export default function NavLogo() {
    return(
        <div className='navLogo__container'>
            <Link className='navLogo__link' to='/'> 
                <img
                    className='navLogo__element'
                    src={mainLogo}
                    alt='logo' 
                />                
            </Link>
        </div>
    )
}