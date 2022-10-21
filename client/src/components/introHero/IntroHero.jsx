import React from 'react';
import IntroText from '../introText/IntroText';
import './IntroHero.scss';

export default function IntroHero() {
    return(
        <header className='introHero__container'>
            <div className='introHero__video'>
                Video here
            </div>
            <IntroText />
        </header>
    )
}