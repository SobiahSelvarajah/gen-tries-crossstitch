import heroImage from '../../assets/hero-image.jpg';
import './HeaderTop.scss';

export default function HeaderTop() {
    return(
        <header className='headerTop__container'>
            <div className='headerTop__text'>
                <p className='headerTop__introText'>
                    Welcome to
                </p>
                <p className='headerTop__logoText'>
                    Gen Tries Crossstitch
                </p>
            </div>
            <img
                className='headerTop__image'
                src={heroImage}
                alt='heroImage'
            />
        </header>
    )
}