import React from "react";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import Welcome from "../../components/welcome/Welcome";
import Sidebar from "../../components/sidebar/Sidebar";
import HomePagePosts from "../../components/homePagePosts/HomePagePosts";
import './HomePage.scss';

const HomePage = () => {
    const { posts, error } = useFetchPosts("/posts", []);
    
    return (
        <>
            <Welcome />
            <section className="homePage__container">
                {error && <p>{error}</p>}
                <HomePagePosts
                    posts={posts} 
                />
                <Sidebar />
            </section>
        </>
    );
}

export default HomePage;