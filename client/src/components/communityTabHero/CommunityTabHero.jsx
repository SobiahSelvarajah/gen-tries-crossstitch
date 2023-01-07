import React from "react";
import heroImage from "../../assets/images/community-hero.jpg";
import "./CommunityTabHero.scss";

export default function CommunityTabHero() {
    return(
        <div className="communityTabHero__container">
            <img
                className="communityTabHero__image"
                src={heroImage}
                alt="heroImage"
            />
            <section className="communityTabHero__textContainer">
                <h2 className="communityTabHero__title">
                    Our Stitching Community
                </h2>
                <h5 className="communityTabHero__description">
                    This is a discussion zone, where you can disucss new topics, ask questions and share new tips and tricks.
                </h5>
            </section>            
        </div>

    )
}