import React from 'react';
import './FooterLinks.scss';

export default function FooterLinks() {
    return (
        <>
            <div className="footerLinks__container">
                <ul className="footerLinks__links">
                    <li className="footerLinks__link">
                        Home
                    </li>
                    <li className="footerLinks__link">
                        About Us
                    </li>
                    <li className="footerLinks__link">
                        Gallery
                    </li>
                </ul>
            </div>    
            <div className="footerLinks__container">
                <ul className="footerLinks__links">
                    <li className="footerLinks__link">
                        Blog
                    </li>
                    <li className="footerLinks__link">
                        Terms and Rules
                    </li>
                    <li className="footerLinks__link">
                        Contact Us
                    </li>
                </ul>
            </div>    
        </>

        
    )
}