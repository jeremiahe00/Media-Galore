import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logout from "./routes/Logout";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-green">
          <div className="container-fluid">
            <h1 className="title"> Showdom </h1>
            <ul className="navbar-nav mb-2 justify-content-end">
              <li className="nav-item">
                <img
                  src="C:\Users\jerry\OneDrive\Documents\Pictures\750px-Royal_crown_curved.svg.png"
                  alt="profile image not found"
                  width="40px"
                  height="40px"
                />
              </li>
              <Button
                text="Login"
                onClick={() => {
                  console.log("clicked");
                }}
              />
              <li className="nav-item">
                <a className="nav-link" href="Profile.html">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="Login.html">
                Logout
              </a> */}
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div id="main">
            <div className="row">
              <div className="col-xl-3 col-lg-2 col-md-1 "></div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                <form id="mainFuncAdd">
                  <h3 id="addHeader" className="mainFunc">
                    <strong> Add </strong>
                  </h3>
                  <div className="input-group mb-3">

                    <input type="text" id="addShowFunc" name="addshow" value="" />
                    <input
                      type="submit"
                      className="btn btn-success"
                      name=""
                      value="Add"
                    />
                  </div>
                </form>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                <form id="mainFuncGen">
                  <h3 id="genHeader" className="mainFunc">
                    <strong> Generate </strong>
                  </h3>
                  <div className="input-group mb-3">
                    <label htmlFor="randgen">
                      <input
                        type="submit"
                        className="btn btn-success"
                        id="genShowFunc"
                        name=""
                        value="Randomize"
                      />
                    </label>
                    <input
                      id="randgen"
                      type="text"
                      name="randomshow"
                      placeholder="Placeholder here"
                      readOnly
                    ></input>
                    <input
                      id="currShow"
                      type="text"
                      className="form-control-plaintext"
                      name="currentShow"
                      value="Replace show pop up"
                      readOnly
                    ></input>
                  </div>
                </form>
              </div>
              <div className="col-xl-2 col-lg-1 "></div>
            </div>

            <br />
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-3 col-sm-2"></div>
              <div className="col-xl-6 col-lg-6 col-md-8 col-sm-9">
                <div id="mainFuncView">
                  <h3 id="viewHeader" className="mainFunc">
                    <strong> View </strong>
                  </h3>
                  <table>
                    <thead>
                      <th>Date Added</th>
                      <th>Name</th>
                      <th>Source</th>
                      <th></th>
                    </thead>
                    <tr>
                      <td>Today</td>
                      <td>Show</td>
                      <td>TV</td>
                      <td>
                        <div className="input-group mb-3">
                          <button
                            type="button"
                            className="btn btn-warning"
                            name=""
                            value="Edit"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            name=""
                            value="Remove"
                          >
                            Remove
                          </button>

                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-1 col-sm-1"></div>
            </div>
          </div>
        </div>
      </div>
      <Routes>

        <Route path="/logout" element={<Logout />} />
      </Routes>

    </Router>
  );
}

export default App;
