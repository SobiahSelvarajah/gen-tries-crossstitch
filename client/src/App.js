import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomePage from './pages/homePage/HomePage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from './pages/write/write';
import AccountSettings from './pages/accountSettings/AccountSettings';
import SinglePostPage from './pages/singlePostPage/SinglePostPage';

function App() {
  const user = true;
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
          path='/write' 
          element={user ? <Write/> : <Register/>} 
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