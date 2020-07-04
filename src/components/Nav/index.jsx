import React from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "./styles";

function Nav() {
  return (
    <NavContainer>
      <ul>
        <li className="selectd">
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/">Profile</Link>
        </li>

        <li>
          <Link to="/">Historic</Link>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;
