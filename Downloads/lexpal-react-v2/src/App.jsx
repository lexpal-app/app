// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import NewMeeting from "./pages/NewMeeting";
import NewSession from "./pages/NewSession";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
import Achievements from "./pages/Achievements";
import Tutorial from "./pages/Tutorial";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Help from "./pages/Help";
import LogOut from "./pages/LogOut";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function App() {
  // const [selected, setSelected] = useState("/dashboard");
  // let component = undefined;
  // if (selected === "/dashboard") {
  //   component = <Dashboard />;
  // } else if (selected === "/newmeeting") {
  //   component = <NewMeeting />;
  // } else if (selected === "/statistics") {
  //   component = <Statistics />;
  // } else if (selected === "/achievements") {
  //   component = <Achievements />;
  // } else if (selected === "/tutorial") {
  //   component = <Tutorial />;
  // } else if (selected === "/login") {
  //   component = <LogIn />;
  // } else if (selected === "/signup") {
  //   component = <SignUp />;
  // } else if (selected === "/help") {
  //   component = <Help />;
  // } else if (selected === "/homepage") {
  //   component = <HomePage />;
  // } else if (selected === "/logout") {
  //   component = <LogOut />;
  // } else {
  //   component = <h1>Other</h1>;
  // }

  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/signin" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newmeeting" element={<NewMeeting />} />
          <Route path="/NewSession" element={<NewSession />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/help" element={<Help />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </Router>

      {/*style here to put on right side*/}
      {/* {component} */}
      {/* <Sidebar setSelected={setSelected} /> */}
      {/*if logged in, show sidebar. change state from isloggedin to false or true*/}
    </>
  );
}

export default App;
