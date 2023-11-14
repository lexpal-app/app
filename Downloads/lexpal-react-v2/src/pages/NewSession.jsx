import React, { useState } from "react";
import MockChatbot from "./MockChatbot";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const NewSession = () => {
  const [chatMessages, setChatMessages] = useState([]);

  const handleUserInput = (userMessage) => {
    // Simulate a chatbot response based on user input
    const botResponse = getBotResponse(userMessage);

    // Update the chat messages
    setChatMessages([
      ...chatMessages,
      { text: userMessage, sender: "user" },
      { text: botResponse, sender: "bot" },
    ]);
  };

  const getBotResponse = (userMessage) => {
    // Simple logic to generate a bot response based on user input
    // In a real-world scenario, this logic would be more sophisticated, possibly calling an external API or a chatbot service
    return `Bot: I received your message: "${userMessage}"`;
  };

  return (
    <div className="newSession">
      <div className="newSessionHeader">
        <h1>Theme: Shopping in French</h1>
      </div>

      <Popup
        trigger={
          <button
            type="newSessionBtn"
            id="newSessionBtn"
            className="shareContactsBtn"
          >
            {" "}
            Share your contacts{" "}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <div className="shareContactsPopup">
              <p>
                <strong>
                  Are you sure you want to share your contact with Teresa Blue?
                </strong>
                <br></br>
                <br></br>
                Your contacts will be available for future meetings.
              </p>
              <button
                type="cancel"
                id="cancelBtn"
                className="grayButton"
                onClick={() => close()}
              >
                Cancel
              </button>
              <button
                type="cancel"
                id="cancelBtn"
                className="grayButton"
                onClick={() => close()}
              >
                Share my contact
              </button>
            </div>
          </div>
        )}
      </Popup>

      <Popup
        trigger={
          <button
            type="newSessionBtn"
            id="newSessionBtn"
            className="endMeetingBtn"
          >
            {" "}
            End Meeting{" "}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal" style={{ overflowY: "auto" }}>
            <div className="viewBtnPopup">
              <h1>Your session on July 3 at 3:00 PM</h1>
              <p>
                Feedback from{" "}
                <span style={{ textDecoration: "underline" }}>Teresa Blue</span>
              </p>

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
                <strong>Correction:</strong> Correcting your partners' mistakes.
              </p>
              <p>7/10</p>
            </div>
            <div>
              <button onClick={() => close()}>Close</button>
            </div>
          </div>
        )}
      </Popup>

      <div className="newSessionWrapper">
        <div className="newSessionGridOne">
          <h2>Use Words you already know</h2>
          <p>Vente</p>
          <p>Remise</p>
        </div>
        <div className="newSessionGridFive">
          <h2>Key Vocabulary</h2>
          <p>1. Client(e)</p>
          <p>2. Un gerant </p>
        </div>
        <div className="videoGrid">
          <h2>Video</h2>
          {/* Sample video element */}
          <video width="400" height="300" controls>
            <source
              src="https://www.example.com/sample-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="chatbotGrid">
          <h2>LexPal AI Assistant</h2>
          {/* Render the chatbot component with messages and user input handler */}
          <MockChatbot messages={chatMessages} onUserInput={handleUserInput} />
        </div>
      </div>
    </div>
  );
};

export default NewSession;
