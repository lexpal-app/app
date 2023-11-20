import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ClearIcon from "@mui/icons-material/Clear";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewSession from "./NewSession";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="person">
          <h1>Hello, Marta</h1>
        </div>
        <div className="one">
          <h1
            style={{
              color: "black",
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
            }}
          >
            Dive Deep
          </h1>
          {"\n"}
          <h2 style={{ marginTop: 0, paddingLeft: 0 }}>
            into your learning process
          </h2>
          <Link to="/NewSession" className="startSession">
            Start a Session
          </Link>
        </div>
        <div className="two">Week Stats</div>
        <div className="three">Today's Goal</div>
        <div className="four">Meetings completed</div>
        <div className="five">Speaking time</div>
        <div className="six">Current Speaking Level</div>
      </div>

      <div className="upcomingHeader">
        <h1>
          Upcoming<span id="lastMeeting">Last meetings</span>
        </h1>
        <div className="upcomingLabels">
          <div className="typeLabel">Type ↓</div>
          <div className="dayLabel">Day ↓</div>
          <div className="timeLabel">Time ↓</div>
          <div className="durationLabel">Duration ↓</div>
          <div className="withLabel">With</div>
        </div>
      </div>

      <div className="upcomingOne">
        <div className="infoCol">Native-to-Native</div>
        <div className="dayCol">
          <span id="iconinText">
            <EventIcon />
          </span>{" "}
          Mon, Jul 3, 2023
        </div>
        <div className="timeCol">
          <span id="iconinText">
            <AccessTimeIcon />
          </span>{" "}
          3:00 PM
        </div>
        <div className="durationCol">30 min</div>
        <div className="withCol">Unknown</div>
        <Link to="/NewSession" className="joinBtn">
          Join Session
        </Link>
        <button type="switch" id="switchBtn" className="switchBtn">
          <span id="iconinText">
            <SwapHorizIcon />
          </span>
        </button>
        <button type="switch" id="cancelBtn" className="cancelBtn">
          <span id="iconinText">
            <ClearIcon />
          </span>
        </button>
      </div>

      <div className="upcomingTwo">
        <div className="infoCol">Non Native-to-Non Native</div>
        <div className="dayCol">
          <span id="iconinText">
            <EventIcon />
          </span>{" "}
          Mon, Jul 3, 2023
        </div>
        <div className="timeCol">
          <span id="iconinText">
            <AccessTimeIcon />
          </span>{" "}
          3:00 PM
        </div>
        <div className="durationCol">30 min</div>
        <div className="withCol">Unknown</div>
        <button type="join" id="joinBtn" className="joinBtn">
          Join Session
        </button>
        <button type="switch" id="switchBtn" className="switchBtn">
          <span id="iconinText">
            <SwapHorizIcon />
          </span>
        </button>
        <button type="switch" id="cancelBtn" className="cancelBtn">
          <span id="iconinText">
            <ClearIcon />
          </span>
        </button>
      </div>
      <button type="add" id="addBtn" className="addBtn">
        Add new meeting +
      </button>
    </>
  );
};

export default Dashboard;
