import React, { Component } from "react";
import { ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Fish extends Component {
  constructor(props) {
    super(props)

    this.state = {
      port: [],
      transactions: []
    }
  }


componentDidMount() {
  console.log(this.props.transaction)
}

getPort = () => {
  fetch(`http://localhost:3001/api${window.location.pathname}`)
  .then((responseText) => {
    var response = responseText.json();
    response.then((response) => {
      this.setState({
        ports: response,
        transactions: response.transactionInfo
      });
    });
  }).then((data) => {
      console.log('request succeeded', data)
    }).catch((error) => {
    console.log('request failed', error)
  })
}

renderTransaction(transactions) {
  return [{}].concat(transactions).map((transaction, i) => (
    i !== 0
      ? ( <ListGroupItem
      key={transaction.id}
      >
      <Link to={`/ports/${this.state.port.id}/${transaction.fishId}`}>
        <h4>
          {transaction.fish}
        </h4>Price p/kilo: {transaction.price} Weight (kg): {transaction.weight}
      </Link>
    </ListGroupItem> ) :
    ( <PageHeader>{this.state.port.name}</PageHeader> )
))
  }

  render() {
    return (
      <div>
        <ListGroup>
            { this.renderTransaction(this.state.transactions)}
        </ListGroup>
      </div>
    );
  }
}
