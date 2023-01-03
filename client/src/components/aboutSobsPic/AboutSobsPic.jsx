import React from "react";
import sobsPic from "../../assets/images/sobsPic.jpg";
import "../aboutGensPic/AboutGensPic.scss";

export default function AboutSobsPic() {
    return(
        <img
            className="aboutSobsPic__image"
            src={sobsPic}
            alt="sobsPic" 
        />
    )
}