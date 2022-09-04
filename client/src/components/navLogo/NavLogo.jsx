import mainLogo from '../../assets/gtc-logo-files/resizable-vector-files/original.svg';
import './NavLogo.scss';

export default function NavLogo() {
    return(
        <div className='navLogo__container'>
            <img
                className='navLogo__element'
                src={mainLogo}
                alt='logo' 
            />
        </div>
    )
}