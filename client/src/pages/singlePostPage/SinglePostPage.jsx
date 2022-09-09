import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';


export default function SinglePostPage() {
  return (
    <>
        <NavBar />
        <Sidebar />
        <SinglePost />
    </>
  )
}
