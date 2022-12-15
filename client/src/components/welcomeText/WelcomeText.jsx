import React from 'react';
import './WelcomeText.scss';

export default function WelcomeText() {
    return(
        <header className='welcomeText__container'>
            <div className='welcomeText__overlay'>
                <h2 className='welcomeText__heading'>
                    Welcome To Gen Tries Crossstitch
                </h2>
                <p className='welcomeText__description'>
                    Here is a short video explaining the 
                    details of this website
                </p>
            </div>
        </header>
    )
}