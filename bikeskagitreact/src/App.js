
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import NewEntry from "./components/NewEntry";
import AllEntry from "./components/AllEntries";
import Random from "./components/ViewRandom";

const App = () => {
  return (
    <Router>

      <div className='navbar'>

        <h1>Bike Skagit</h1>
            
        <div className='navlinks'>
          <Link to="/"> New Entry. </Link>
          <Link to="/AllEntry"> All Entries. </Link>
          <Link to="/Random">  Random Entry. </Link>
        </div>
      </div>


      <Routes>
        <Route path="/" element={<NewEntry />} />
        <Route path="/AllEntry" element={<AllEntry />} /> 
        <Route path="/Random" element={<Random />} /> 

      </Routes>


    </Router>

  );
}

export default App;
