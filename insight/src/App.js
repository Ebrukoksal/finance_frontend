import "./App.css";
// import axios from "axios";
// { useState, useEffect }
import React from "react";
import Insight from "../src/components/Insight";
import QA from "./components/Q&A";
import Person from "../src/components/Person";
import Photo from "../src/components/images/indir.jpeg";
// import data from '../src/api/person.json';


function App() {
  
  return (
    <div className="App">
      <nav  className="parent">
      <Person 
        image={Photo}  
        />
      </nav>
      <div style={{ height: "250px"}}></div>
        <div className="IQbuttons">
          <button className="Ibutton">INSIGHTS</button>
          <button className="Qbutton">Q&A</button>
        </div>
      <div>
      <Insight />
      </div>
    </div>
  );
}

export default App;
