// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Signup from './Signup';
import Logout from './Logout';
// import Home from './Home';
// import Profile from './Profile';

const AppRouter: React.FC = () => {
  return (
    <Router>
      
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/contact" component={Contact} /> */}
      
    </Router>
  );
};



// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // is this the better way?

// const MyComponent: React.FC = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/about');
//   };

export default AppRouter;
