import React from 'react';
import './IntroHero.scss';

export default function IntroHero() {
    return(
        <section className='introHero__container'>
            <div className='introHero__video'>
                Video here
            </div>
            <div className='introHero__textContainer'>
                <h2 className='introHero__heading'>
                    Welcome To Gen Tries Crossstitch
                </h2>
                <p className='introHero__description'>
                    Here is a short video explaining the 
                    details of this website
                </p>
            </div>
        </section>
    )
}