import React from "react";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signupHeader">
        <h1>Create an account.</h1>
        <h2>
          We'd love to have you on board. Join over 500+ customers around the
          globe and enhance productivity.
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

export default SignUp;
