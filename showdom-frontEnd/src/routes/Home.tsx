import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "../App.css";
import { Button } from "../components/Button";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CreateMediaParams, RetrieveMediaParams} from "../models/Models";
import MediaForm from "../components/MediaForm";
import { useCookies } from "react-cookie";
import MediaList from "../components/table/MediaList";
import { useNavigate } from "react-router-dom";


function App() {




  const [medias, setMedias] = useState<RetrieveMediaParams[]>([]) //[]
  const [editMedia, setEditMedia] = useState<RetrieveMediaParams | null>(null) //null
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let navigate = useNavigate()


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/medias/', {
    'method': 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token['mytoken']}`
      }
    })
    .then(resp => resp.json())
    .then(resp => setMedias(resp))
    .catch(error => console.log(error))

  }, []) // add token here?

  useEffect(() => {
    if (!token['mytoken']) {
      navigate('/')
    }
  }, [token])


  const editBtn = (media:RetrieveMediaParams) => {
    setEditMedia(media)
  }

  const deleteBtn = (media:RetrieveMediaParams) => {
    const curr_media = medias.filter(mymedia => {
      if(mymedia.id === media.id) {
        return false;
      } else {
        return true;
      }
    })

    setMedias(curr_media)
  }

  const mediaForm = () => {
    setEditMedia({id: 0, title:'', source:''}) // find a way to split this up (adding a new media inserts id=0 at first)
  }

  const insertedInformation = (media: RetrieveMediaParams) => {
    const newMedia = [...medias, media];
    setMedias(newMedia);
  };

  const updatedInformation = (media: RetrieveMediaParams) => {
    const existing_media = medias.map(mymedia => {
      if(mymedia.id === media.id) {
        return media;
      } else {
        return mymedia;
      }
    })

    setMedias(existing_media)

  };

  const logoutBtn = () => {
    removeToken(token['mytoken'])
  }


  return (
      <div className="App">
        {/* <nav className="navbar-expand-lg bg-green">
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
                {/* <Link to="/logout">Logout</Link> */}
              {/* </li> */}
            {/* </ul> */}
          {/* </div> */}
        {/* </nav> */} 

        <div className="container">
          <div id="main">
            <div className="row">
              <div className="col-xl-3 col-lg-2 col-md-1 "></div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                <div className="col">
                  <button onClick={logoutBtn} className="btn btn-primary">Logout</button>


                </div>
                <form id="mainFuncAdd">
                  <h3 id="addHeader" className="mainFunc">
                    <strong> Add </strong>
                  </h3>
                  <div className="input-group mb-3">

                    {/* <input type="text" id="title" name="addshow" value={title}  */}
                    {/* className="form-control"/> */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={mediaForm}
                    >Add</button>
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
            {/* <div className="row">
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
            </div> */}
          </div>
        </div>


        <MediaList medias = {medias} editBtn={editBtn} deleteBtn={deleteBtn} />

        {editMedia ? <MediaForm media = {editMedia} updatedInformation={updatedInformation} insertedInformation={insertedInformation} /> : null}

      </div>
  );
}

export default App;
