import React from "react";
import NavBar from "../../components/navBar/NavBar";
import HeroHeader from "../../components/heroHeader/HeroHeader";

function HomePage() {
    return (
        <>
            <section className="homePage__container">
                <NavBar />
                <HeroHeader />
            </section>
        </>

    );
}

export default HomePage;
