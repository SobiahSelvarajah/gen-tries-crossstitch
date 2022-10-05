import React from "react";
import gensPicture from '../../assets/images/gensPic.jpeg';

export default function AboutMePic() {
    return(
        <img
            className='aboutMePic__image'
            src={gensPicture}
            alt='myPic' 
        />
    )
}