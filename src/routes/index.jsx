import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import Sigin from "../pages/Sigin";
import SignOut from "../pages/SignOut";

function Routes() {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={Sigin} path="/singin" />
      <Route component={SignOut} path="/register" />
      <Route component={SignOut} path="/profile" />
    </Switch>
  );
}

export default Routes;
