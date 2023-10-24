import React from "react";
import { useState } from "react";

const HomePage = () => {
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
  return (
    <div className="homepage">
      <h1>Hello!</h1>
      <form action="/action_page.php">
        <br />
        <label for="language">What is your native language?</label>
        <form>
          <select value={myLanguage} onChange={handleChange}>
            <option value="Select">Select</option>
            {languages.map((language) => {
              return <option value={language}>{language}</option>;
            })}
          </select>
        </form>
        <br />
        <label for="lname">Where are you from?</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <label for="lname">What languages are you practicing?</label>
        <br />
        <form>
          <select value={myLanguage} onChange={handleChange}>
            <option value="Select">Select</option>
            {languages.map((language) => {
              return <option value={language}>{language}</option>;
            })}
          </select>
        </form>
        <br />
        <input type="submit" id="submitBtn" value="Submit" />
      </form>
    </div>
  );
};

export default HomePage;
