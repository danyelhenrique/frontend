import React from "react";
import Main from "../../components/Main";
import Aside from "../../components/Aside";
import Header from "../../components/Header";

// import { Container } from './styles';

function Default({ children }) {
  return (
    <Main>
      <Aside />
      <Header title="Dashboard" />
      {children}
    </Main>
  );
}

export default Default;
