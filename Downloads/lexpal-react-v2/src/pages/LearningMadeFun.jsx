import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const LearningMadeFun = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/meaningfulconversations");
  };
  const handleNextClick = () => {
    navigate("/anytimeanywhere");
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
          <h1>Learning Made Fun </h1>
        </div>
        <div className="tutorialParagraphs">
          <div className="paragraph1">
            <p>
              Thanks to gamification elements, you can earn points, unlock
              achievements, and track your progress as you navigate through
              various language learning activities and challenges. This
              interactive approach adds an element of friendly competition and
              motivation, making your learning experience more engaging and
              rewarding.
            </p>
          </div>
          <div className="paragraph2">
            <p>
              The feature offers a wide range of interactive language learning
              games and activities. These games are designed to reinforce
              vocabulary, grammar, pronunciation, and other language skills in
              an entertaining and interactive manner.
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

export default LearningMadeFun;
