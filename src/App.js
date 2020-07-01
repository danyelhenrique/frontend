import React from "react";
import { Router } from "react-router-dom";
import history from "./config/history";
import GlobalStyle from "./global/styles";
import Routes from "./routes";
import "./global/styles.css";

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
