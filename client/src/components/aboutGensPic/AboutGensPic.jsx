import React from 'react';
import gensPic from '../../assets/images/gensProfile.jpg';

export default function AboutGensPic() {
    return (
        <img 
            className='aboutGensPic__image'
            src={gensPic}
            alt='GensPic'
        /> 
    )
}