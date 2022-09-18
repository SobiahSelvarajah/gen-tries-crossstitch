import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import './SinglePostPage.scss';

export default function SinglePostPage() {
  return (
    <>
      <section className="singlePostPage__container">
        <SinglePost />
        <Sidebar />
      </section>
    </>
  )
}