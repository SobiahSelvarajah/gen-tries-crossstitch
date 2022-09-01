import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';

const App = () => {
  return(
    <>
      <Router>
        <Route exact path='/' component={HomePage} />
      </Router>
    </>
  )
}

export default App;
