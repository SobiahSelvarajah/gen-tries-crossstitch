import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomePage from './pages/homePage/HomePage';
import SinglePostPage from './pages/singlePostPage/SinglePostPage';
import PublishPost from './pages/publishPost/PublishPost';
import AccountSettings from './pages/accountSettings/AccountSettings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  const user = false;
  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route 
          path='/register' 
          element={user ? <HomePage/> : <Register/>} 
        />      
        <Route 
          path='/login' 
          element={user ? <HomePage/> : <Login/>} 
        />   
        <Route 
          path='/publish' 
          element={user ? <PublishPost/> : <Register/>} 
        />
        <Route 
          path='/settings' 
          element={user ? <AccountSettings/> : <Register/>} 
        />                         
        <Route 
          path='/post/:postId' 
          element={user ? <SinglePostPage/> : <Register/>} 
        />
      </Routes>
    </Router>
  )
}

export default App;