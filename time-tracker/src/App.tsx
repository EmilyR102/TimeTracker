import React from 'react';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Routes - makes sure only one route is shown at any given time

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path={"/"} element={<Welcome />}/>
          <Route path={"/login"} element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
