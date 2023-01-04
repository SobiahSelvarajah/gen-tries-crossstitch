import React from "react";
import WelcomeText from "../welcomeText/WelcomeText";
import "./Welcome.scss";

export default function Welcome() {
    return(
        <section className="welcome__container">
            <WelcomeText />
            <div className="welcome__video">
                Video here
            </div>
        </section>
    )
}