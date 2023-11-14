// MockChatbot.jsx
import React from "react";

const MockChatbot = ({ messages, onUserInput }) => {
  return (
    <div className="mock-chatbot">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.sender === "bot" ? "bot-message" : "user-message"
            }
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          placeholder="Send a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onUserInput(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default MockChatbot;
