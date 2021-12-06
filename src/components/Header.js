import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink end to="/">
      Home
    </NavLink>
    <NavLink end to="/portfolio">
      Portfolio
    </NavLink>
    <NavLink end to="/contact">
      Contact
    </NavLink>
  </header>
);

export default Header;
