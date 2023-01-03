import React from "react";
import instagramLogo from "../../assets/icons/instagram.png";

export default function SocialsSobs() {
    return(
        <ul className="socialsSobs__container">
            <li className="socialsSobs__item">
                <a className="socialsSobs__link" href="">
                    <img
                        className="socialsSobs__logo"
                        src={instagramLogo}
                        alt="instagramLogo"
                    />
                    <h5 className="socialsSobs__handle">
                        @sobiah11
                    </h5>
                </a>
            </li>
        </ul>
    )
}