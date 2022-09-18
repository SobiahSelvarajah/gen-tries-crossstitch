import React from 'react';
import HomePagePost from '../homePagePost/HomePagePost';
import './HomePagePosts.scss';

export default function HomePagePosts() {
  return (
    <section className='homePagePosts__container'>
      <div className='homePagePosts__headingPart'>
        <h1 className='homePagePosts__heading'>
          My Stitches
        </h1>        
      </div>
      <div className='homePagePosts__posts'>
        <HomePagePost />
        <HomePagePost />
        <HomePagePost />
        <HomePagePost />
        <HomePagePost />
        <HomePagePost />        
      </div>
    </section>
  )
}