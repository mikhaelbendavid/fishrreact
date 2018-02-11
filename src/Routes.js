import React from "react";
import { Switch } from "react-router-dom";
import Ports from "./components/Ports";
import AppliedRoute from "./components/AppliedRoute";
import Transactions from "./components/Transactions";
import Port from "./components/Port";
import Home from "./components/Home";
import Fish from "./components/Fish";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/map" exact component={Ports} props={childProps} />
    <AppliedRoute path="/transactions" exact component={Transactions} props={childProps} />
    <AppliedRoute path="/ports/:portId" exact component={Port} props={childProps} />
    <AppliedRoute path="/ports/:portId/:fishId" exact component={Fish} props={childProps} />
  </Switch>
