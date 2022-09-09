import React from 'react';
import HomePagePost from '../homePagePost/HomePagePost';
import './HomePagePosts.scss';

export default function HomePagePosts() {
  return (
    <section className='homePagePosts__container'>
      <div className='homePagePosts__headingPart'>
        <span className='homePagePosts__heading'>
          My Stitches
        </span>        
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