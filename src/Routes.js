import React from "react";
import { Switch } from "react-router-dom";
import Ports from "./components/Ports";
import AppliedRoute from "./components/AppliedRoute";
import Transactions from "./components/Transactions";

import Port from "./components/Port";
import Home from "./components/Home";
import Fish from "./components/Fish";

import Create from "./components/Create";
import Complete from "./components/Complete";
import Home from "./components/Home";
import Login from "./components/Login"

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/map" exact component={Ports} props={childProps} />
    <AppliedRoute path="/transactions" exact component={Transactions} props={childProps} />
    <AppliedRoute path="/ports/:portId" exact component={Port} props={childProps} />
    <AppliedRoute path="/ports/:portId/:fishId" exact component={Fish} props={childProps} />
    <AppliedRoute path="/transactions/create" exact component={Create} props={childProps} />
    <AppliedRoute path="/transactions/complete" exact component={Complete} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} />
  </Switch>
