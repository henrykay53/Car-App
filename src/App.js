import React from 'react'
import {Routes, Route } from "react-router-dom";


// import './App.css';
import Home from './Components/Home';
import Audi from './Components/Audi';
import Benz from './Components/Benz';
import Ford from './Components/Ford';

// import DropDown from './Components/MobileDropdown';
import Hamburger from './Components/Hamburger';





function App() {
  return (
    <div className="App">

    <Hamburger />

    
      <Routes>

        <Route  path="/" element={ <Home/> } />
        <Route  path="/audi" element={<Audi/>} />
        <Route  path="/benz" element={<Benz/>} />
        <Route  path="/ford" element={<Ford/>} />

      </Routes>


      

      {/* <DropDown /> */}
  
    </div>
 
  );
}

export default App;
