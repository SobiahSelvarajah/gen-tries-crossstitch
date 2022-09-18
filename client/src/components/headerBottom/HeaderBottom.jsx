import { Link } from 'react-router-dom';
import stringsImage from '../../assets/images/strings.jpg';
import './HeaderBottom.scss';

export default function HeaderBottom() {
    return(
        <header className='headerBottom__container'>
            <img
                className='headerBottom__image'
                src={stringsImage}
                alt='strings' 
            />
            <div className='headerBottom__links'>
                <Link className='headerBottom__element' to='/'>
                    HOME
                </Link>
                <Link className='headerBottom__element' to='/about'>
                    ABOUT
                </Link>
                <Link className='headerBottom__element' to='/contact'>
                    CONTACT
                </Link>
                <Link className='headerBottom__element' to='/write'>
                    WRITE
                </Link>
            </div>
        </header>
    )
}