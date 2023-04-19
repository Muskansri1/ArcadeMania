


import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  AboutUs  from './Components/AboutUs/AboutUs';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(){
    setIsLoggedIn(true);
  }

  return (
   
      <Router>
      <Routes>
    

     
      <Route path="/aboutus" element={<AboutUs />} />
     
      </Routes>
    </Router>
    // console.log("please work")
  );
}

export default App;
