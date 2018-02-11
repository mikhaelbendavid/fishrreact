import React from "react";
import { Switch } from "react-router-dom";
// import AfricaMap from "../components/AfricaMap";
import Ports from "./components/Ports";
import AppliedRoute from "./components/AppliedRoute";
import Transactions from "./components/Transactions";
import Create from "./components/Create";
import Complete from "./components/Complete";
import Home from "./components/Home";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/map" exact component={Ports} props={childProps} />
    <AppliedRoute path="/transactions" exact component={Transactions} props={childProps} />
    <AppliedRoute path="/transactions/create" exact component={Create} props={childProps} />
    <AppliedRoute path="/transactions/complete" exact component={Complete} props={childProps} />
  </Switch>
