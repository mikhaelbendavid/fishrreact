import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";
import RouteNavItem from "./components/RouteNavItem";
import Transactions from "./components/Transactions";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Fishr</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <RouteNavItem key={1} href="/">Home</RouteNavItem>
            <RouteNavItem Key={2} href="/transactions">Transactions</RouteNavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      <Routes />
    </div>
    );
  }
}

export default withRouter(App);
