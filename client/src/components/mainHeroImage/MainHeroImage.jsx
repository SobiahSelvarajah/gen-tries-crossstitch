import React from "react";
import heroImage from '../../assets/images/hero-image.jpg';

export default function MainHeroFunction() {
    return(
        <img
            className='mainHeroImage__image'
            src={heroImage}
            alt='heroImage'
        />
    )
}