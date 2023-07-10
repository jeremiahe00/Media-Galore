import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Signup from './Signup';
// import Logout from './Logout';

function Logout() {
  return (
    // <div className="App">
    <>
      <nav className="navbar navbar-expand-lg bg-green">
        <div className="container-fluid">
          <h1 className="title"> Showdom </h1>
          <ul className="navbar-nav mb-2 justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="Login.html">Logout</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Signup.html">Signup</a>
            </li>
          </ul>
        </div>
      </nav>

      <br /><br />
      <form action="MediaGalore.html" id="loginform" method="get">
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="userem" name="useremail" placeholder="name@email.com" required />
          <label htmlFor="userem" className="form-label"><strong>Email:</strong></label>
        </div>
        <div className="form-floating">
          <input id="userpass" type="password" name="userpassword" value="" className="form-control" placeholder="password"
            required />
          <label htmlFor="userpass" className="form-label"><strong>Password:</strong></label>
        </div>
        <p></p>
        <input type="submit" className="btn btn-primary" id="loginSignupButton" name="" value="Log In" />
      </form>
      {/* </div> */}
    </>
  );
}

export default Logout;
