import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';

import './SinglePostPage.scss';

export default function SinglePostPage() {
  return (
    <>
        <NavBar />
        <section className="singlePostPage__container">
          <SinglePost />
          <Sidebar />
        </section>
    </>
  )
}
