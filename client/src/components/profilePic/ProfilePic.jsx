import React from "react";
import profilePicture from '../../assets/images/gensProfile.jpg';

export default function ProfilePic() {
    return(
        <img 
            className='profilePic__image'
            src={profilePicture}
            alt='profilePic'
        />   
    )
}