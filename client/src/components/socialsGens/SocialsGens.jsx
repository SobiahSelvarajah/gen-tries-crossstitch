import React from "react";
import instagramLogo from "../../assets/icons/instagram.png";
import "./SocialsGens.scss";

export default function SocialsGens() {
    return(
        <ul className='socialsGens__container'>
            <li className='socialsGens__item'>
                <a className='socialsGens__link' href='https://www.instagram.com/gen_tries_crossstitch/'>
                    <img
                        className='socialsGens__logo'
                        src={instagramLogo}
                        alt='instagramLogo'
                    />
                    <h5 className="socialsGens__handle">
                        @gensHandle
                    </h5>
                </a>
            </li>
        </ul>
    )
}