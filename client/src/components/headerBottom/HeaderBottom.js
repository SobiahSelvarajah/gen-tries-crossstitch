import stringsImage from '../../assets/strings.jpg';

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
                <a
                    className='headerBottom__element' 
                    href='/'>
                    HOME
                </a>
                <a 
                    className='headerBottom__element'
                    href='/about'>
                    ABOUT
                </a>
                <a 
                    className='headerBottom__element'
                    href='/contact'>
                    CONTACT
                </a>
                <a 
                    className='headerBottom__element'
                    href='/mystitches'>
                    MY STITCHES
                </a>
                <a 
                    className='headerBottom__element'
                    href='/logout'>
                    LOGOUT
                </a>
        </div>
        </header>
    )
}