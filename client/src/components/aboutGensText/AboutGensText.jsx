import React from "react";
import SocialsGens from "../socialsGens/SocialsGens";

export default function AboutGensText() {
    return(
        <section className="aboutGensText__container">
            <h2 className="aboutGensText__heading">
                Genevive Williams
            </h2>
            <p className="aboutGensText__description">
                Roses are red, violets are blue, butterflies are pretty and so are you.
            </p>
            <SocialsGens />
        </section>
    )
}