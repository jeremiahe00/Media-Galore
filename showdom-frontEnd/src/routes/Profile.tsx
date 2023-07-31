import React from "react";
import logo from "./logo.svg";
import "../App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Signup from './Signup';
// import Logout from './Logout';

function Profile() {
    return (
        // <div classNameName="App">
        <>

  <nav className="navbar navbar-expand-lg bg-green">
    <div className="container-fluid">
      <h1 className="title"> Showdom </h1>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="MediaGalore.html">Home</a>
        </li>
      </ul>
      <ul className="navbar-nav mb-2 justify-content-end">
        <li className="nav-item">
          <img src="C:\Users\jerry\OneDrive\Documents\Pictures\750px-Royal_crown_curved.svg.png"
            alt="profile image not found" width="40px" height="40px"/>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Login.html">Logout</a>
        </li>
      </ul>
    </div>
  </nav>

    <span id="userimage">
      <img src="C:\Users\jerry\OneDrive\Documents\Pictures\750px-Royal_crown_curved.svg.png"
        alt="profile image not found" width="50px" height="50px"/>
    </span>

  <p></p>
  <div className="mb-3">
    <label htmlFor="formFileSm" className="form-label"><button type="button">Upload</button></label>
    <input className="form-control form-control-sm " id="formFileSm" type="file" value=""/>
  </div>
        </>
      );


}

export default Profile