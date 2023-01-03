import React from "react";
import gensPic from "../../assets/images/gensPic.jpeg";

export default function AboutGensPic() {
    return(
        <img 
            className="aboutGensPic__image"
            src={gensPic}
            alt="gensPic"
        />
    )
}