import React from "react";
import AboutMeTitle from "../../components/aboutMeTitle/AboutMeTitle";
import AboutMePic from "../../components/aboutMePic/AboutMePic";
import AboutMeContent from "../../components/aboutMeContent/AboutMeContent";

const About = () => {
    return(
        <section className="about__container">
            <AboutMeTitle />
            <AboutMePic />
            <AboutMeContent />
        </section>
    )
}

export default About;