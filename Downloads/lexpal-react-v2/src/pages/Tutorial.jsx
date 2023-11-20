import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/richlearning");
  };
  return (
    <>
      <div className="tutorial">
        <div className="tutorialWrapper">
          <div className="videoHere">
            <p>Insert tutorial video here.</p>
          </div>
        </div>
      </div>
      <div className="tutorialGrid">
        <div className="tutorialHeading">
          <h1>Perfect Language Partners</h1>
        </div>
        <div className="tutorialParagraphs">
          <div className="paragraph1">
            <p>
              Upon joining, you will have access to an extensive database of
              language partners from around the world, allowing you to connect
              with individuals who align with your specific language learning
              goals.
            </p>
          </div>
          <div className="paragraph2">
            <p>
              You can find language partners who are eager to learn your native
              language while assisting you in mastering theirs. This feature
              seamlessly matches learners based on their language preferences,
              proficiency levels, and shared interests, ensuring an optimal
              language exchange experience.
            </p>
          </div>
        </div>
        <button
          type="next"
          id="nextBtn"
          className="nextBtn"
          onClick={handleNextClick}
        >
          Next
        </button>
        <button type="skip" id="skipBtn" className="skipBtn">
          Skip
          <NavigateNextIcon />
        </button>
      </div>
    </>
  );
};

export default Tutorial;
