import React from "react";
import NavBar from "../../components/navBar/NavBar";
import HeroHeader from "../../components/heroHeader/HeroHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import BlogPosts from "../../components/blogPosts/BlogPosts";

import './HomePage.scss';

function HomePage() {
    return (
        <>
            <NavBar />
            <HeroHeader />
            <section className="homePage__container">
                <BlogPosts />
                <Sidebar />
            </section>
        </>

    );
}

export default HomePage;
