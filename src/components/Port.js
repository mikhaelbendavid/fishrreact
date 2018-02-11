import React, { Component } from "react";
import { ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Port extends Component {
  constructor(props) {
    super(props)

    this.state = {
      port: [],
      transactions: [],
      species: []
    }
  }

  componentDidMount() {
    this.getFish();
  }

  getFish = () => {
    fetch(`http://localhost:3001/api/species`)
    .then((responseText) => {
      var response = responseText.json();
      response.then((response) => {
        this.setState({
          species: response,
          // port: response,
          // transactions: response.transactionInfo
        });
      });
    }).then((data) => {
        console.log('request succeeded', data)
      }).catch((error) => {
      console.log('request failed', error)
    })
  }

  renderSpecies(species) {
    return [{}].concat(species).map((specie, i) => (
      i !== 0
        ? ( <ListGroupItem
        key={specie.id}
        >
        <Link to={window.location.pathname +`/${specie.id}`}>
          <h4>
            {specie.name}
          </h4>
        </Link>
      </ListGroupItem> ) :
      ( <PageHeader>Spcies in Port</PageHeader> )
  ))
    }

  render() {
    return (
      <div>
        <ListGroup>
            { this.renderSpecies(this.state.species)}
        </ListGroup>
      </div>
    );
  }
}
