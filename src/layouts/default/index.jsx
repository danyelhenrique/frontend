import React from "react";
import Main from "../../components/Main";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

// import { Container } from './styles';

function Default({ children }) {
  return (
    <Main>
      <Aside />
      <Header title="Dashboard" />
      <Nav />
      {children}
    </Main>
  );
}

export default Default;
