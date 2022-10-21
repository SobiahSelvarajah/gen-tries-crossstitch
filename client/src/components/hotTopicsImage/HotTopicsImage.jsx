import React from "react";
import hotTopicsImage from '../../assets/images/hero-image.jpg';

export default function HotTopicsImage() {
    return(
        <img
            className='hotTopicsImage__image'
            src={hotTopicsImage}
            alt='heroImage'
        />
    )
}