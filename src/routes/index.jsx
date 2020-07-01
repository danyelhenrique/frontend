import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

function AA() {
  return <h1>ola</h1>;
}
function Routes() {
  return (
    <Switch>
      <Route component={AA} path="/" />
      <Route component={AA} path="/singin" />
    </Switch>
  );
}

export default Routes;
