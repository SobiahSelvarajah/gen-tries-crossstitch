import React from 'react';
import './FooterLinks.scss';

export default function FooterLinks() {
    return (
        <>
            <div className="footerLinks__container">
                <h2 className='footerLinks__heading'>
                    GTC
                </h2>
                <ul className="footerLinks__links">
                    <li className="footerLinks__link">
                        Home
                    </li>
                    <li className="footerLinks__link">
                        About Us
                    </li>
                </ul>
            </div>    
            <div className="footerLinks__container">
                <h2 className='footerLinks__heading'>
                    Our Community
                </h2>
                <ul className="footerLinks__links">
                    <li className="footerLinks__link">
                        Blogs
                    </li>
                    <li className="footerLinks__link">
                        Community Tab
                    </li>
                </ul>
            </div>    
            <div className="footerLinks__container">
                <h2 className='footerLinks__heading'>
                    Support
                </h2>
                <ul className="footerLinks__links">
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