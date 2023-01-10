import React from "react";
import { Link } from "react-router-dom";
import "./FooterLinks.scss";

export default function FooterLinks() {
    return (
        <>
            <section className="footerLinks__container">
                <h2 className="footerLinks__heading">
                    GTC
                </h2>
                <ul className="footerLinks__links">
                    <li className="footerLinks__element">
                        <Link to="/" className="footerLinks__link">Home</Link>
                    </li>
                    <li className="footerLinks__element">
                        <Link to="/aboutus" className="footerLinks__link">About Us</Link>
                    </li>
                </ul>
            </section>    
            <section className="footerLinks__container">
                <h2 className="footerLinks__heading">
                    Our Community
                </h2>
                <ul className="footerLinks__links">
                    <li className="footerLinks__element">
                        <Link to="/blogs" className="footerLinks__link">Blogs</Link>
                    </li>
                    <li className="footerLinks__element">
                        <Link to="/community" className="footerLinks__link">Community Tab</Link>
                    </li>
                </ul>
            </section>    
            <section className="footerLinks__container">
                <h2 className="footerLinks__heading">
                    Support
                </h2>
                <ul className="footerLinks__links">
                    <li className="footerLinks__element">
                        <Link to="/terms" className="footerLinks__link">Terms and Rules</Link>
                    </li>
                    <li className="footerLinks__element">
                        <Link to="/contactus" className="footerLinks__link">Contact Us</Link>
                    </li>
                </ul>
            </section>  
        </>
    )
}