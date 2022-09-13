import React from "react";
import HeroHeader from "../../components/heroHeader/HeroHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import HomePagePosts from "../../components/homePagePosts/HomePagePosts";

import './HomePage.scss';


function HomePage() {
    return (
        <>
            <HeroHeader />
            <section className="homePage__container">
                <HomePagePosts />
                <Sidebar />
            </section>
        </>

    );
}

export default HomePage;
