import React from 'react';
import NavBar from './components/navBar/NavBar';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

// import HomePage from './pages/homePage/HomePage';
import SinglePostPage from './pages/singlePostPage/SinglePostPage';

const App = () => {
  return(
    <>
      <NavBar />
      {/* <HomePage /> */}
      <SinglePostPage />    
    </>
  )
}

export default App;
