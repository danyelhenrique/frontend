import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

import { AsideContainer } from "./styles";

function Aside() {
  function handleSignOut() {}

  return (
    <AsideContainer>
      <Link to="/singin">
        <FaSignInAlt />
      </Link>
      <a onClick={handleSignOut}>
        <FaSignOutAlt />
      </a>
      <Link to="/profile">
        <FaUserCircle />
      </Link>
    </AsideContainer>
  );
}

export default Aside;
