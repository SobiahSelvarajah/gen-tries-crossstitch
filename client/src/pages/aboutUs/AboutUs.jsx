import React from "react";
import AboutUsTitle from "../../components/aboutUsTitle/AboutUsTitle";
import AboutGensContent from "../../components/aboutGensContent/AboutGensContent";

const AboutUs = () => {
    return(
        <section className="about__container">
            <AboutUsTitle />
            <AboutGensContent />
        </section>
    )
}

export default AboutUs;