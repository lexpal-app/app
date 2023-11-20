import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const AnytimeAnywhere = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/learningmadefun");
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
          <h1>Anytime, Anywhere Learning</h1>
        </div>
        <div className="tutorialParagraphs">
          <div className="paragraph1">
            <p>
              You are not bound by the constraints of traditional classroom
              settings or fixed learning schedules. You have the freedom to
              learn at your own pace and create a personalized learning
              experience that aligns with your individual needs and commitments.
            </p>
          </div>
          <div className="paragraph2">
            <p>
              This flexibility enables you to fit language learning seamlessly
              into your daily routine, whether you have a few minutes during
              your commute or an hour in the evening.
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

export default AnytimeAnywhere;
