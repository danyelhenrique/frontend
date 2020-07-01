import React from "react";

import { MdNotifications } from "react-icons/md";

import cover from "../../assets/images/joe.jpg";
import SeachBar from "../SearchBar";

import {
  HeaderContainer,
  HeaderItems,
  Notifications,
  UserCover,
} from "./styles";

function Header({ title }) {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <HeaderItems>
        <SeachBar />
        <Notifications type="button">
          <MdNotifications />
        </Notifications>
        <UserCover>
          <img src={cover} alt="user cover" />
        </UserCover>
      </HeaderItems>
    </HeaderContainer>
  );
}

export default Header;
