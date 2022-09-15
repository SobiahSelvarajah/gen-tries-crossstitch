import React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
// import HomePage from './pages/homePage/HomePage';
// import SinglePostPage from './pages/singlePostPage/SinglePostPage';
// import PublishPost from './pages/publishPost/PublishPost';
import AccountSettings from './pages/accountSetting/AccountSettings';

const App = () => {
  return(
    <>
      <NavBar />
      {/* <HomePage /> */}
      {/* <SinglePostPage /> */}
      {/* <PublishPost /> */}
      <AccountSettings />
    </>
  )
}

export default App;
