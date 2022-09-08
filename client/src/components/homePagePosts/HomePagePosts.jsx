import React from 'react';
import HomePagePost from '../homePagePost/HomePagePost';
import './HomePagePosts.scss';

export default function HomePagePosts() {
  return (
    <section className='homePagePosts__container'>
      <span className='hoemPagePosts__heading'>
        MY STITCHES
      </span>
      <HomePagePost />
      <HomePagePost />
      <HomePagePost />
    </section>
  )
}
