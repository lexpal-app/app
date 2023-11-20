import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const RichLearning = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/tutorial");
  };
  const handleNextClick = () => {
    navigate("/meaningfulconversations");
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
          <h1>Rich Learning Materials</h1>
        </div>
        <div className="tutorialParagraphs">
          <div className="paragraph1">
            <p>
              You have the flexibility to customize your learning experience and
              access a wealth of resources that cater to your specific needs.
              Whether you prefer visual, auditory, or interactive learning, this
              feature provides a diverse range of materials that accommodate
              different learning styles.
            </p>
          </div>
          <div className="paragraph2">
            <p>
              The materials are organized in a structured and progressive
              manner, allowing you to build a solid foundation and gradually
              progress to more advanced concepts and topics.
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
        <button type="skip" id="skipBtn" className="skipBtn">
          Skip
          <NavigateNextIcon />
        </button>
      </div>
    </>
  );
};

export default RichLearning;
