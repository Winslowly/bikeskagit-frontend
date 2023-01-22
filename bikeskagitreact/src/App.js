
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
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Bike Skagit</span>
          </div>  
        </nav>
      </div>

  <nav class="bg-orange-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <Link to="/" class="text-gray-900 dark:text-white hover:underline font-bold" aria-current="page">New Entry.</Link>
                </li>
                <li>
                    <Link to="/AllEntry" class="text-gray-900 dark:text-white hover:underline font-bold">All Entries.</Link>
                </li>
                <li>
                    <Link to="/Random" class="text-gray-900 dark:text-white hover:underline font-bold"> Random Entry.</Link>
                </li>
            </ul>
        </div>
    </div>
  </nav>    
            
            {/* <div className='navlinks'>
              <Link to="/"> New Entry. </Link>
              <Link to="/AllEntry"> All Entries. </Link>
              <Link to="/Random">  Random Entry. </Link>
            </div>
        
      </div> */}


      <Routes>
        <Route path="/" element={<NewEntry />} />
        <Route path="/AllEntry" element={<AllEntry />} /> 
        <Route path="/Random" element={<Random />} /> 

      </Routes>


    </Router>

  );
}

export default App;
