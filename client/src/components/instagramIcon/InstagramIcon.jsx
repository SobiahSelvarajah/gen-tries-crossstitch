import React from "react";
import instaIcon from '../../assets/icons/instagram.svg';

export function InstagramIcon() {
    return(
        <a 
            className='instagramIcon__socialLink'
            href='https://www.instagram.com/gen_tries_crossstitch/'>
            <img 
                className='instagramIcon__socialIcon'
                src={instaIcon}
                alt='instagramIcon'
            />
            <h4 className='instagramIcon__socialName'>
                @gen_tries_crossstitch
            </h4>
        </a>
    )
}