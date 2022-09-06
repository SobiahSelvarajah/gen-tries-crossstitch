import React from "react";
import NavBar from "../../components/navBar/NavBar";
import HeroHeader from "../../components/heroHeader/HeroHeader";
import Sidebar from "../../components/sidebar/Sidebar";

function HomePage() {
    return (
        <>
            <section className="homePage__container">
                <NavBar />
                <HeroHeader />
                <Sidebar />
            </section>
        </>

    );
}

export default HomePage;
