import React, { Component } from "react";
import { ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions = () => {
      fetch('http://localhost:3001/api/transactions', {
        method: 'GET',
      })
      .then((responseText) => {
        var response = responseText.json();
        response.then((response) => {
          this.setState({
            transactions: response,
          });
        });
      }).then((data) => {
        console.log('request succeeded with JSON response', data)
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
        <Link to={`/transactions/${transaction.id}`}>
          <h4>
            Price: {transaction.price} Weight: {transaction.weight}
          </h4>{ "Submitted: " + (new Date(transaction.createdAt)).toLocaleString() }
        </Link>

      </ListGroupItem> )
      : ( <PageHeader>Transactions</PageHeader> )
      )
    )
  }

  render() {
    return(
      <div>
        <ListGroup>
            { this.renderTransactions(this.state.transactions)}
        </ListGroup>

      </div>
    )
  }
}
