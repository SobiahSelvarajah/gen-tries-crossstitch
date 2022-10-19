import HeaderTop from '../headerTop/HeaderTop';
import HeaderBottom from '../headerBottom/HeaderBottom';
import './HeroHeader.scss';
import IntroHero from '../introHero/IntroHero';

export default function HeroHeader() {
    return(
        <>
            <header className='heroHeader__container'>
                <IntroHero />
                <HeaderTop />
            </header>
        </>
    )
}