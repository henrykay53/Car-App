import React from 'react'
import {Routes, Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
// import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Audi from './Components/Audi';
import Benz from './Components/Benz';
import Ford from './Components/Ford';




function App() {
  return (
    <div className="App">

      {/* <NavBar /> */}
      <Routes>

        {/* <Route  path="/" component={NavBar} /> */}
        <Route  path="/" element={ <Home/> } />
        <Route  path="/audi" element={<Audi/>} />
        <Route  path="/benz" element={<Benz/>} />
        <Route  path="/ford" element={<Ford/>} />

      </Routes>
  
    </div>
 
  );
}

export default App;
