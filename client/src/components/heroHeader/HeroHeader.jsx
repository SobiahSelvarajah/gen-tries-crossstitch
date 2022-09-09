import HeaderTop from '../headerTop/HeaderTop';
import HeaderBottom from '../headerBottom/HeaderBottom';

export default function HeroHeader() {
    return(
        <header classname='heroHeader__container'>
            <HeaderTop />
            <HeaderBottom />
        </header>
    )
}