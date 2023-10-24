import React from "react";
import { useState } from "react";

const NewMeeting = () => {
  const languages = [
    "English",
    "Afrikaans",
    "Albanian",
    "Arabic",
    "Armenian",
    "Basque",
    "Bengali",
    "Bulgarian",
    "Catalan",
    "Cambodian",
    "Chinese (Mandarin)",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Estonian",
    "Fiji",
    "Finnish",
    "French",
    "Georgian",
    "German",
    "Greek",
    "Gujarati",
    "Hebrew",
    "Hindi",
    "Hungarian",
    "Icelandic",
    "Indonesian",
    "Irish",
    "Italian",
    "Japanese",
    "Javanese",
    "Korean",
    "Latin",
    "Latvian",
    "Lithuanian",
    "Macedonian",
    "Malay",
    "Malayalam",
    "Maltese",
    "Maori",
    "Marathi",
    "Mongolian",
    "Nepali",
    "Norwegian",
    "Persian",
    "Polish",
    "Portuguese",
    "Punjabi",
    "Quechua",
    "Romanian",
    "Russian",
    "Samoan",
    "Serbian",
    "Slovak",
    "Slovenian",
    "Spanish",
    "Swahili",
    "Swedish",
    "Tamil",
    "Tatar",
    "Telugu",
    "Thai",
    "Tibetan",
    "Tonga",
    "Turkish",
    "Ukrainian",
    "Urdu",
    "Uzbek",
    "Vietnamese",
    "Welsh",
    "Xhosa",
  ];

  const [myLanguage, setMyLanguage] = useState("Select");

  const handleChange = (event) => {
    setMyLanguage(event.target.value);
  };

  const [myType, setMyType] = useState("Select");

  const handleType = (event) => {
    setMyType(event.target.value);
  };

  const [myPeer, setMyPeer] = useState("Select");

  const handlePeer = (event) => {
    setMyPeer(event.target.value);
  };

  return (
    <div className="newmeeting">
      <div className="meetingHeader">
        <h1>Set New Meeting</h1>
      </div>
      <form>
        <div className="fieldOne">
          <label>The meeting will appear in upcoming meetings</label>
          <button type="matched" id="matchedBtn" className="matchedBtn">
            Matched Peer
          </button>
          <button type="practice" id="practiceBtn" className="practiceBtn">
            Practice with Friend
          </button>

          <div class="columnSection">
            <div class="dateWrapper">
              <label for="date">Date</label>
              <input id="date" type="date" placeholder="DD/MM/YYYY" />
            </div>
            <div class="timeWrapper">
              <label for="time">Time</label>
              <input id="time" type="time" placeholder="12:00 PM" />
            </div>

            <div class="languageWrapper">
              <label for="language">Language</label>
              <form>
                <select value={myLanguage} onChange={handleChange}>
                  <option value="Select">Select</option>
                  {languages.map((language) => {
                    return <option value={language}>{language}</option>;
                  })}
                </select>
              </form>
            </div>
            <div class="typeWrapper">
              <label for="type">Type</label>
              <form>
                <select value={myType} onChange={handleType}>
                  <option value="Select">Select</option>
                  <option value="Native Speaker">Native Speaker</option>
                  <option value="Non-Native Speaker">Non-Native Speaker</option>
                </select>
              </form>
            </div>
            <div class="peerWrapper">
              <label for="peer">Peer</label>
              <form>
                <select value={myPeer} onChange={handlePeer}>
                  <option value="Select">Select</option>
                  <option value="Maria">Maria</option>
                  <option value="Marcus">Marcus</option>
                </select>
              </form>
            </div>
            <div className="checkboxWrapper">
              <input type="checkbox" />
              <label class="container">Unknown</label>
              <span class="checkmark"></span>
            </div>
          </div>
        </div>
      </form>
      <div className="bottomWrapper">
        <button type="cancel" id="cancelBtn" className="grayButton">
          Cancel
        </button>
        <button type="submit" id="setBtn" className="setButton">
          Set New Meeting
        </button>
      </div>
    </div>
  );
};

export default NewMeeting;
