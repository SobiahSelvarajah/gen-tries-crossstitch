import React from "react";
import { Link } from "react-router-dom";
import './AboutUsTitle.scss';

export default function AboutUsTitle() {
    return(
            <h1 className="aboutUsTitle__title">
                <Link to='/aboutus' className="aboutUsTitle__link"> 
                    ABOUT US
                </Link>
            </h1>
    )
}