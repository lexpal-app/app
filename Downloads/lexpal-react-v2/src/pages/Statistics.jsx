import React, { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ClearIcon from "@mui/icons-material/Clear";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";

const Statistics = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="statistics">
        <div className="statisticsHeader">
          <h1>Statistics</h1>
        </div>

        <Link to="/Profile" className="profileButton">
          Marta Gross
        </Link>

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

        <Popup
          trigger={
            <button type="join" id="joinBtn" className="joinStatBtn">
              {" "}
              View{" "}
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal" style={{ overflowY: "auto" }}>
              <div className="viewBtnPopup">
                <h1>Your session on July 3 at 3:00 PM</h1>
                <p>Feedback from Teresa Blue</p>
                <p>
                  <strong>Conversational Fluency:</strong> Demonstrate strong
                  conversational fluency.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Accuracy:</strong> Strong grammar and vocabulary.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Pronunciation:</strong> Pronouncing words correctly.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Strengths:</strong> What you need well.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Areas for improvement:</strong> What you could do
                  better.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Language Partner:</strong> Functioning as a language
                  partner.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Correction:</strong> Correcting your partners'
                  mistakes.
                </p>
                <p>7/10</p>
                <div className="insidethePopup">
                  <p>
                    <strong>What is good</strong>
                  </p>
                  <p>
                    The English conversation was fantastic! I used new grammar
                    and vocabulary. I feel more confident in my English skills
                    after this meeting. See you soon!
                  </p>
                </div>
              </div>
              <div>
                <button onClick={() => close()}>Close</button>
              </div>
            </div>
          )}
        </Popup>

        {showMore && (
          <div className="additionalMeetings">
            {/* Additional meeting components go here */}
            <p>
              <strong>Meeting Statistics</strong>
            </p>
            <p>Engagement</p>
            <div className="correctionRating">
              <p>Correction Rating (1-100)</p>
            </div>
            <div className="pronunciationRating">
              <p>Correction Rating (1-100)</p>
            </div>
            <div className="grammarRating">
              <p>Grammar Rating (1-100)</p>
            </div>
          </div>
        )}

        {/* "Show More" button */}
        <div className="showmoreCol" onClick={toggleShowMore}>
          {showMore ? "Show Less ^" : "Show More ↓"}
        </div>
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
        <Popup
          trigger={
            <button type="join" id="joinBtn" className="joinStatBtn">
              {" "}
              View{" "}
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal" style={{ overflowY: "auto" }}>
              <div className="viewBtnPopup">
                <h1>Your session on July 3 at 3:00 PM</h1>
                <p>Feedback from Teresa Blue</p>
                <p>
                  <strong>Conversational Fluency:</strong> Demonstrate strong
                  conversational fluency.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Accuracy:</strong> Strong grammar and vocabulary.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Pronunciation:</strong> Pronouncing words correctly.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Strengths:</strong> What you need well.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Areas for improvement:</strong> What you could do
                  better.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Language Partner:</strong> Functioning as a language
                  partner.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Correction:</strong> Correcting your partners'
                  mistakes.
                </p>
                <p>7/10</p>
                <div className="insidethePopup">
                  <p>
                    <strong>What is good</strong>
                  </p>
                  <p>
                    The English conversation was fantastic! I used new grammar
                    and vocabulary. I feel more confident in my English skills
                    after this meeting. See you soon!
                  </p>
                </div>
              </div>
              <div>
                <button onClick={() => close()}>Close</button>
              </div>
            </div>
          )}
        </Popup>
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
        <Popup
          trigger={
            <button type="join" id="joinBtn" className="joinStatBtn">
              {" "}
              View{" "}
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal" style={{ overflowY: "auto" }}>
              <div className="viewBtnPopup">
                <h1>Your session on July 3 at 3:00 PM</h1>
                <p>Feedback from Teresa Blue</p>
                <p>
                  <strong>Conversational Fluency:</strong> Demonstrate strong
                  conversational fluency.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Accuracy:</strong> Strong grammar and vocabulary.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Pronunciation:</strong> Pronouncing words correctly.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Strengths:</strong> What you need well.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Areas for improvement:</strong> What you could do
                  better.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Language Partner:</strong> Functioning as a language
                  partner.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Correction:</strong> Correcting your partners'
                  mistakes.
                </p>
                <p>7/10</p>
                <div className="insidethePopup">
                  <p>
                    <strong>What is good</strong>
                  </p>
                  <p>
                    The English conversation was fantastic! I used new grammar
                    and vocabulary. I feel more confident in my English skills
                    after this meeting. See you soon!
                  </p>
                </div>
              </div>
              <div>
                <button onClick={() => close()}>Close</button>
              </div>
            </div>
          )}
        </Popup>
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
        <Popup
          trigger={
            <button type="join" id="joinBtn" className="joinStatBtn">
              {" "}
              View{" "}
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal" style={{ overflowY: "auto" }}>
              <div className="viewBtnPopup">
                <h1>Your session on July 3 at 3:00 PM</h1>
                <p>Feedback from Teresa Blue</p>
                <p>
                  <strong>Conversational Fluency:</strong> Demonstrate strong
                  conversational fluency.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Accuracy:</strong> Strong grammar and vocabulary.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Pronunciation:</strong> Pronouncing words correctly.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Strengths:</strong> What you need well.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Areas for improvement:</strong> What you could do
                  better.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Language Partner:</strong> Functioning as a language
                  partner.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Correction:</strong> Correcting your partners'
                  mistakes.
                </p>
                <p>7/10</p>
                <div className="insidethePopup">
                  <p>
                    <strong>What is good</strong>
                  </p>
                  <p>
                    The English conversation was fantastic! I used new grammar
                    and vocabulary. I feel more confident in my English skills
                    after this meeting. See you soon!
                  </p>
                </div>
              </div>
              <div>
                <button onClick={() => close()}>Close</button>
              </div>
            </div>
          )}
        </Popup>
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
        <Popup
          trigger={
            <button type="join" id="joinBtn" className="joinStatBtn">
              {" "}
              View{" "}
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal" style={{ overflowY: "auto" }}>
              <div className="viewBtnPopup">
                <h1>Your session on July 3 at 3:00 PM</h1>
                <p>Feedback from Teresa Blue</p>
                <p>
                  <strong>Conversational Fluency:</strong> Demonstrate strong
                  conversational fluency.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Accuracy:</strong> Strong grammar and vocabulary.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Pronunciation:</strong> Pronouncing words correctly.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Strengths:</strong> What you need well.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Areas for improvement:</strong> What you could do
                  better.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Language Partner:</strong> Functioning as a language
                  partner.
                </p>
                <p>7/10</p>
                <p>
                  <strong>Correction:</strong> Correcting your partners'
                  mistakes.
                </p>
                <p>7/10</p>
                <div className="insidethePopup">
                  <p>
                    <strong>What is good</strong>
                  </p>
                  <p>
                    The English conversation was fantastic! I used new grammar
                    and vocabulary. I feel more confident in my English skills
                    after this meeting. See you soon!
                  </p>
                </div>
              </div>
              <div>
                <button onClick={() => close()}>Close</button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  );
};

export default Statistics;
