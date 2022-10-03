import React from 'react';
import { useFetchSinglePost } from '../../hooks/useFetchSinglePost';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import './SinglePostPage.scss';

const SinglePostPage = () => {
  const { post, error } = useFetchSinglePost("/posts/", {});

  return (
    <>
      <section className="singlePostPage__container">
        {error && <p>{error}</p>}
        <SinglePost
          post = {post}
        />
        <Sidebar />
      </section>
    </>
  )
}

export default SinglePostPage;