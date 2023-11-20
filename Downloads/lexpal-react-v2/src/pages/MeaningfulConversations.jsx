import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const MeaningfulConversations = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/richlearning");
  };
  const handleNextClick = () => {
    navigate("/learningmadefun");
  };

  const handleSkipClick = () => {
    navigate("/dashboard");
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
          <h1>Meaningful Conversations</h1>
        </div>
        <div className="tutorialParagraphs">
          <div className="paragraph1">
            <p>
              You can engage in real-time conversations, exchange written
              messages, or practice pronunciation and speaking skills through
              voice recordings.
            </p>
          </div>
          <div className="paragraph2">
            <p>
              The conversations facilitated through this feature go beyond mere
              language practice. They provide a platform for you to engage in
              discussions on a wide range of topics, explore cultural nuances,
              and share personal experiences. This helps you develop a deeper
              understanding of the language and its cultural context, enriching
              your overall language learning experience.
            </p>
          </div>
        </div>
        <button
          type="next"
          id="nextBtn"
          className="backBtn"
          onClick={handleBackClick}
        >
          Back
        </button>
        <button
          type="next"
          id="nextBtn"
          className="nextBtn"
          onClick={handleNextClick}
        >
          Next
        </button>
        <button
          type="skip"
          id="skipBtn"
          className="skipBtn"
          onClick={handleSkipClick}
        >
          Skip
          <NavigateNextIcon />
        </button>
      </div>
    </>
  );
};

export default MeaningfulConversations;
