import React from "react";
import { Switch } from "react-router-dom";
// import AfricaMap from "../components/AfricaMap";
import Ports from "./components/Ports";
import AppliedRoute from "./components/AppliedRoute";
import Transactions from "./components/Transactions";
import Home from "./components/Home";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/map" exact component={Ports} props={childProps} />
    <AppliedRoute path="/transactions" exact component={Transactions} props={childProps} />
  </Switch>
