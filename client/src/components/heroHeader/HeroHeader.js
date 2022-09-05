import HeaderTop from '../headerTop/HeaderTop';
import HeaderBottom from '../headerBottom/HeaderBottom';

import './HeroHeader.scss';

export default function HeroHeader() {
    return(
        <header classname='heroHeader__container'>
            <HeaderTop />
            <HeaderBottom />
        </header>
    )
}