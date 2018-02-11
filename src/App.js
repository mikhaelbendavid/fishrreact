import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";
import RouteNavItem from "./components/RouteNavItem";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import CustomMap from './components/CustomMap.js'

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
            <RouteNavItem key={2} href="/fish">Fish</RouteNavItem>
            <RouteNavItem Key={3} href="/transactions">Transactions</RouteNavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      <Routes />
    </div>
    );
  }
}

export default withRouter(App);
