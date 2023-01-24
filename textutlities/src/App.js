
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App(prop) {
  const [mode, setmode] = useState('light')
 

  const toggleMode =()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";

    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Plant Mandi" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-4" >
          <Routes>
              <Route path="/" element={<TextForm mode={mode} toggleMode={toggleMode}/>}>
              </Route>
              <Route path="/about" element={<About />}>
              </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


