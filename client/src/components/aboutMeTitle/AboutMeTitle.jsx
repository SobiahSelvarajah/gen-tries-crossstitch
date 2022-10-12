import React from "react";
import { Link } from "react-router-dom";

export default function AboutMeTitle() {
    return(
            <h1 className="aboutMeTitle__title">
                <Link to='/about' className="aboutMeTitle__link"> 
                    ABOUT ME
                </Link>
            </h1>
    )
}