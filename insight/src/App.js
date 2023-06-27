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
        <div className="navbar2">
          <div className="navbar3"></div>
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
      <div className="tabs">
        <Tabs
          defaultValue={0}
          className="tabs"
          style={{ backgroundColor: "#854DFF" }}
        >
          <TabList
            className="tablist"
            style={{
              backgroundColor: "#AD8BF7",
              width: "350px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              marginBottom: "-4px",
              width: "300px",
              zIndex:"0"
            }}
          >
            <Tab
              style={{
                marginBottom: "-4px",
                borderRadius: "5px",
                width: "50px",
              }}
            >
              INSIGHT
            </Tab>
            <Tab
              style={{
                marginBottom: "-4px",
                borderRadius: "5px",
                width: "50px",
                borderTopRightRadius: "20px",
              }}
            >
              Q&A
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <div>
              <Insight />
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <div>
              <QA />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
