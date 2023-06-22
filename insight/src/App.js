import "./App.css";
// import axios from "axios";
import React from "react";
import Insight from "../src/components/Insight";
import QA from "./components/Q&A";
import Person from "../src/components/Person";
import Photo from "../src/components/images/indir.jpeg";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import TabList from "@mui/joy/TabList";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <nav className="parent">
          <Person image={Photo} />
        </nav>
      </div>
      <div style={{ height: "250px" }}></div>
      <div className="tabs">
        <Tabs
          defaultValue={0}
          className="tabs"
          style={{ backgroundColor: "rgb(128, 128, 128)" }}
        >
          <TabList
            className="tablist"
            style={{
              color: "rgb(192, 188, 188)",
              width: "350px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              marginBottom: "-4px",
            }}
          >
            <Tab>INSIGHT</Tab>
            <Tab>Q&A</Tab>
          </TabList>
          <TabPanel value={0}>
            <div>
              <Insight />
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <QA />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
