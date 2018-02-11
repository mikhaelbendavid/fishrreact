import React, { Component } from "react";
import Ports from "./Ports";
import { PageHeader } from "react-bootstrap";
import CustomMap from "./CustomMap";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div>
        <PageHeader>Nearby Marketplaces</PageHeader>
        <CustomMap />

        <Ports />
      </div>
    )
  }
}
