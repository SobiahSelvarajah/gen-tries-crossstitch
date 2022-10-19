import React from "react";
import gensPicture from '../../assets/images/gensPic.jpeg';
import './AboutMePic.scss';

export default function AboutMePic() {
    return(
        <div className='aboutMePic__container'>
            <img
                className='aboutMePic__image'
                src={gensPicture}
                alt='myPic' 
            />
        </div>
    )
} 