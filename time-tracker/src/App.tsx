import React from 'react';
import './App.css';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Routes - makes sure only one route is shown at any given time

function App() {
  const homeURL = "/"
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={homeURL} element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
