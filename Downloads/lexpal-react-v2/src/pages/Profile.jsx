import React, { useState } from "react";
import MockChatbot from "./MockChatbot";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="Profile">
      <button className="generalBtn" onClick={() => openTab("general")}>
        General
      </button>

      <button
        className="sharedContactsBtn"
        onClick={() => openTab("sharedContacts")}
      >
        Shared Contacts
      </button>

      <div style={{ display: activeTab === "general" ? "block" : "none" }}>
        <div className="generalTabContent">
          <h2>Your Profile Picture</h2>
          <p>This is the content of the General tab.</p>
          <label htmlFor="fileInput">Upload a Photo:</label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
          />
          <h1>Personal Info</h1>
          <form>
            <label for="name">Name*</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <br />
            <label for="username">Email*</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your email"
            />
            <br />
            <label for="pwd">Password*</label>
            <br />
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Enter your password"
            />
            <br />

            <input type="submit" id="signinBtn" value="Sign up" />
          </form>
        </div>
      </div>

      <div
        style={{ display: activeTab === "sharedContacts" ? "block" : "none" }}
      >
        <div className="sharedContactsContent">
          <h2>Shared Contacts Tab Content</h2>
          <p>This is the content of the Shared Contacts tab.</p>
        </div>
      </div>

      {selectedFile && (
        <div>
          <h2>Uploaded Photo:</h2>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
