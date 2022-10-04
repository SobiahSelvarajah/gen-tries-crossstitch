import React from 'react';
import HomePagePost from '../homePagePost/HomePagePost';
import './HomePagePosts.scss';

const HomePagePosts = ({posts}) => {
  return (
    <section className='homePagePosts__container'>
      <div className='homePagePosts__headingPart'>
        <h1 className='homePagePosts__heading'>
          Just Stitching Away...
        </h1>        
      </div>
      <div className='homePagePosts__posts'>
        {posts.map((eachPost) => (
          <HomePagePost 
            key={eachPost._id}
            post={eachPost}
          />            
        ))}
      </div>
    </section>
  )
};

export default HomePagePosts;