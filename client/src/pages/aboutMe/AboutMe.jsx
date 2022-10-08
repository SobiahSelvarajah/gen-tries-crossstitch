import React from "react";
import AboutMePic from "../../components/aboutMePic/AboutMePic";
import AboutMeContent from "../../components/aboutMeContent/AboutMeContent";

const About = () => {
    return(
        <section className="about__container">
            <AboutMePic />
            <AboutMeContent />
        </section>
    )
}

export default About;