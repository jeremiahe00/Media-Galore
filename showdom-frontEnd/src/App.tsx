import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./routes/Home"
import Logout from "./routes/Logout";
import Profile from "./routes/Profile";


function App() {

  

  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav> */}
      <nav className="navbar-expand-lg bg-green">
        <div className="container-fluid">
          <h1 className="title"> Showdom </h1>
          <ul className="navbar-nav mb-2 justify-content-end">
            <div className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
            </div>
            <div className="nav-item">
            <img
                  src="C:/Users/jerry/OneDrive/Documents/Pictures/750px-Royal_crown_curved.svg.png"
                  alt="profile not found"
                  width="40px"
                  height="40px"
                />
            <Link to="/profile" className="nav-link">Profile</Link>
            </div>
            <div className="nav-item">
            <Link to="/logout" className="nav-link">Logout</Link>
            </div>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

    </Router>
  );
}

export default App;
