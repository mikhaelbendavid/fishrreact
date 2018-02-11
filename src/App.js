import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";
// import logo from './logo.svg';
import './App.css';
import Ports from './components/Ports.js';
import AfricaMap from './components/AfricaMap.js';
import Routes from "./Routes";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import CustomMap from './components/CustomMap.js'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Fishr</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight eventKey={1}>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/fish">Fish</NavItem>
            <NavItem href="/profile">Profile</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <CustomMap />
        <Ports portCities={[{city:'Adelaide', portId: 'm32f'}, {city:'Seattle', portId: 'dkwe'}, {city:'London', portId: 'mf32'}, {city:'Bolivia Is not A city', portId: 'zovf'}]} />
      </div>
      <Routes />
    </div>
    );
  }
}

export default withRouter(App);
