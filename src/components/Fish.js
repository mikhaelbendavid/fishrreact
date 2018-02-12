import React, { Component } from "react";
import { ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Fish extends Component {
  constructor(props) {
    super(props)

    this.state = {
      port: [],
      transactions: [],

    }
  }


componentDidMount() {
  this.getPortTransactions()
}

getPortTransactions = () => {
  fetch(`http://localhost:3001/api/transactions${window.location.pathname}`)
  .then((responseText) => {
    var response = responseText.json();
    response.then((response) => {
      console.log(response)
      this.setState({
        transactions: response,
        port: response.portInfo
      });
    });
  }).then((data) => {
      console.log('request succeeded', data)
    }).catch((error) => {
    console.log('request failed', error)
  })
}

renderTransactions(transactions) {
  return [{}].concat(transactions).map((transaction, i) => (
    i !== 0
      ? ( <ListGroupItem
      key={transaction.id}
      >
        <h4>
          {transaction.price}
        </h4>Price p/kilo: {transaction.price} Weight (kg): {transaction.weight}

    </ListGroupItem> ) :
    ( <PageHeader>Port Name</PageHeader> )
))
  }

  render() {
    return (
      <div>
        <ListGroup>
            { this.renderTransactions(this.state.transactions)}
        </ListGroup>
      </div>
    );
  }
}
