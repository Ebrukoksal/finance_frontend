import "./App.css";
// import axios from "axios";
// { useState, useEffect }
import React from "react";
import Insight from "../src/components/Insight";
import Person from "../src/components/Person";
import Photo from "../src/components/images/indir.jpeg";
import data from '../src/api/person.json';


function App() {
  return (
    <div className="App">
      <nav  className="parent">
      <Person 
        image={Photo} 
        name={data.personInfo[0].name} 
        date={data.personInfo[0].date} 
        other={data.personInfo[0].other} 
        />
      </nav>
      <Insight />
    </div>
  );
}

export default App;
