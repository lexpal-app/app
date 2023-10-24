// components/Navbar/index.js

import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <nav id="signupNav">
            <NavLink to="/sign-up">Sign Up</NavLink>
          </nav>
        </NavMenu>
        <NavBtn>
          <nav id="signinNav">
            <NavBtnLink to="/signin">Log In</NavBtnLink>
          </nav>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
