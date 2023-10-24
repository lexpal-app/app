import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ClearIcon from "@mui/icons-material/Clear";

const Statistics = () => {
  return (
    <>
      <div className="statistics">
        <div className="statisticsHeader">
          <h1>Statistics</h1>
        </div>
        <div className="leftBox">Left box</div>
        <div className="rightBox">Right box</div>
      </div>

      <div className="lastMeetingsHeader">
        <h1>Last Meetings</h1>
        <div className="lastMeetingsLabels">
          Type ↓<div className="dayLabel">Day ↓</div>
          <div className="timeLabel">Time ↓</div>
          <div className="durationLabel">Questions</div>
          <div className="withLabel">Peer</div>
          <div className="feedbackLabel">Peer Feedback</div>
        </div>
      </div>

      <div className="lastMeetingsOne">
        <div className="infoStatCol">Native-to-Native</div>
        <div className="dayStatCol">
          <span id="iconinText">
            <EventIcon />
          </span>{" "}
          Mon, Jul 3, 2023
        </div>
        <div className="timeStatCol">
          <span id="iconinText">
            <AccessTimeIcon />
          </span>{" "}
          3:00 PM
        </div>
        <div className="durationStatCol">Question Set 1</div>
        <div className="withStatCol">Unknown</div>
        <button type="join" id="joinBtn" className="joinStatBtn">
          View
        </button>
        <div className="showmoreCol">Show More</div>
      </div>

      <div className="lastMeetingsTwo">
        <div className="infoStatCol">Non Native-to-Non Native</div>
        <div className="dayStatCol">
          <span id="iconinText">
            <EventIcon />
          </span>{" "}
          Mon, Jul 3, 2023
        </div>
        <div className="timeStatCol">
          <span id="iconinText">
            <AccessTimeIcon />
          </span>{" "}
          3:00 PM
        </div>
        <div className="durationStatCol">Question Set 2</div>
        <div className="withStatCol">Teresa Blue</div>
        <button type="join" id="joinBtn" className="joinStatBtn">
          View
        </button>
      </div>

      <div className="lastMeetingsThree">
        <div className="infoStatCol">Non Native-to-Non Native</div>
        <div className="dayStatCol">
          <span id="iconinText">
            <EventIcon />
          </span>{" "}
          Mon, Jul 3, 2023
        </div>
        <div className="timeStatCol">
          <span id="iconinText">
            <AccessTimeIcon />
          </span>{" "}
          3:00 PM
        </div>
        <div className="durationStatCol">Question Set 3</div>
        <div className="withStatCol">Unknown</div>
        <button type="join" id="joinBtn" className="joinStatBtn">
          View
        </button>
      </div>
      <div className="lastMeetingsFour">
        <div className="infoStatCol">Non Native-to-Non Native</div>
        <div className="dayStatCol">
          <span id="iconinText">
            <EventIcon />
          </span>{" "}
          Mon, Jul 3, 2023
        </div>
        <div className="timeStatCol">
          <span id="iconinText">
            <AccessTimeIcon />
          </span>{" "}
          3:00 PM
        </div>
        <div className="durationStatCol">Question Set 4</div>
        <div className="withStatCol">Anna W.</div>
        <button type="join" id="joinBtn" className="joinStatBtn">
          View
        </button>
      </div>
      <div className="lastMeetingsFive">
        <div className="infoStatCol">Non Native-to-Non Native</div>
        <div className="dayStatCol">
          <span id="iconinText">
            <EventIcon />
          </span>{" "}
          Mon, Jul 3, 2023
        </div>
        <div className="timeStatCol">
          <span id="iconinText">
            <AccessTimeIcon />
          </span>{" "}
          3:00 PM
        </div>
        <div className="durationStatCol">Question Set 5</div>
        <div className="withStatCol">Maria</div>
        <button type="join" id="joinBtn" className="joinStatBtn">
          View
        </button>
      </div>
    </>
  );
};

export default Statistics;
