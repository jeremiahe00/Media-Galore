import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import Home from "./routes/Home"
import Logout from "./routes/Logout";
import Profile from "./routes/Profile";

function Router() {

  return(
    <CookiesProvider>
    <BrowserRouter>
    
    <Routes>
      <Route path = '/' Component = {Home}/>
      <Route path = '/profile' Component = {Profile}/>
      <Route path = '/logout' Component={Logout}/>
    </Routes>

    </BrowserRouter>
    </CookiesProvider>
  );

}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <Router />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();