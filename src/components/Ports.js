import React, { Component } from "react";
import { ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Ports extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ports: []
    }
  }

  componentDidMount() {
    this.getPorts();
  }

  getPorts = () => {
    fetch('http://localhost:3001/api/ports')
    .then((responseText) => {
      var response = responseText.json();
      response.then((response) => {
        this.setState({
          ports: response,
        });
      });
    }).then((data) => {
        console.log('request succeeded', data)
      }).catch((error) => {
      console.log('request failed', error)
    })
  }

renderPorts(ports) {
  return [{}].concat(ports).map((port, i) => (
    i !== 0
      ? ( <ListGroupItem
      key={port.id}
      >
      <Link to={`/ports/${port.id}`}>
        <h4>
          {port.name}
        </h4>{ "Submitted: " }
      </Link>
    </ListGroupItem> ) :
    ( <PageHeader>Ports of Call</PageHeader> )
))
  }

  render() {
    return (
      <div>
        <ListGroup>
            { this.renderPorts(this.state.ports)}
        </ListGroup>
      </div>
    );
  }
}
