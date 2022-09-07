import React from "react";
import NavBar from "../../components/navBar/NavBar";
import HeroHeader from "../../components/heroHeader/HeroHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import HomePagePosts from "../../components/homePagePosts/HomePagePosts";

import './HomePage.scss';


function HomePage() {
    return (
        <>
            <NavBar />
            <HeroHeader />
            <section className="homePage__container">
                <HomePagePosts />
                <Sidebar />
            </section>
        </>

    );
}

export default HomePage;
