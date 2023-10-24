import React from "react";

const LogIn = () => {
  return (
    <div className="login">
      <div className="loginHeader">
        <h1>Welcome back!</h1>
        <h2>
          We'd love to have you on board. Join over 500+ customers around the
          globe and enchance productivity. Log in to your account.
        </h2>

        <button
          type="google"
          id="googleBtn"
          className="googleBtn"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://google.com";
          }}
        >
          Sign in with Google
        </button>

        <form>
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
          <input type="submit" id="signinBtn" value="Sign in" />
          <h3>Don't have an account? Sign Up</h3>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
