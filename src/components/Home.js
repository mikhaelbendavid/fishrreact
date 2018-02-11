import React, { Component } from "react";
import AfricaMap from "./AfricaMap";
import Ports from "./Ports";
import { PageHeader } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div>
        <PageHeader>Ports</PageHeader>
        <AfricaMap />
        <Ports />
      </div>
    )
  }
}
