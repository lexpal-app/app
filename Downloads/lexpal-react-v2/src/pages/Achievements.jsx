import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Achievements = () => {
  const [myLanguage, setMyLanguage] = useState("English");

  const handleChange = (event) => {
    setMyLanguage(event.target.value);
  };

  return (
    <>
      <div className="achievements">
        <div className="achievementsHeading">
          <h1>Achievements</h1>
        </div>
        <button type="premium" id="premiumBtn" className="premiumBtn">
          Get Premium!
        </button>
        <button type="credits" id="creditsBtn" className="creditsBtn">
          6 credits
        </button>
        <button type="bell" id="bellBtn" className="bellBtn">
          <NotificationsIcon />
        </button>
        <Link
          to="/Profile"
          type="profile"
          id="profileBtn"
          className="profileBtn"
        >
          <PersonIcon /> Marta Gross
        </Link>
      </div>

      <div className="achievementsBottom">
        <div className="milestonesTab">
          <p>Milestones</p>
        </div>
        <div className="certificatesTab">
          <p>Certificates</p>
        </div>
        <div className="selectLanguage">
          <form>
            <select value={myLanguage} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Chinese">Chinese</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </form>
        </div>
      </div>

      <div className="achievementsGrid">
        <div className="aOne">Attract Five Speakers</div>
        <div className="aTwo">10 Hours of Practice</div>
        <div className="aThree">Daily Diligence</div>
        <div className="aFour">Vocabulary Virtuoso</div>
        <div className="aFive">Fearless Speaker</div>
        <div className="aSix">Novice Navigator</div>
        <div className="aSeven">Word Explorer</div>
        <div className="aEight">5 hours of practice</div>
        <div className="aNine">Cultural Explorer</div>
        <div className="aTen">Speedster</div>
        <div className="aEleven">15 hours of practice</div>
        <div className="aTwelve">Grammar Guru</div>
        <div className="aThirteen">Fluency Achiever</div>
        <div className="aFourteen">Listening Maestro</div>
        <div className="aFifteen">Translation Virtuoso</div>
        <div className="aSixteen">Creative Writer</div>
        <div className="aSeventeen">Language Scholar</div>
        <div className="aEighteen">Social Linguist</div>
        <div className="aNineteen">Linguistic Historian</div>
        <div className="aTwenty">Language Olympian</div>
      </div>
    </>
  );
};

export default Achievements;
