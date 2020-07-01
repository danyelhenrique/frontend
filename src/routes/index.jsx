import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Dashboard from "../pages/Dashboard";

function AA() {
  return <h1>ola</h1>;
}
function Routes() {
  return (
    <Switch>
      <Route component={Dashboard} path="/" />
      <Route component={AA} path="/singin" />
    </Switch>
  );
}

export default Routes;
