import React from "react";
import AboutUsTitle from "../../components/aboutUsTitle/AboutUsTitle";
import AboutGens from "../../components/aboutGens/AboutGens";
import AboutSobs from "../../components/aboutSobs/AboutSobs";
import AboutPartnership from "../../components/aboutPartnership/AboutPartnership";
import "./AboutUs.scss";

export default function AboutUs() {
    return (
        <>
            <AboutUsTitle />
            <AboutGens />
            <AboutSobs />
            <AboutPartnership />
        </>
    )
} 