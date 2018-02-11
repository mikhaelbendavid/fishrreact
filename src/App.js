import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Ports from './components/Ports.js';
import AfricaMap from './components/AfricaMap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <AfricaMap />
        <Ports portCities={[{city:'Adelaide', portId: 'm32f'}, {city:'Seattle', portId: 'dkwe'}, {city:'London', portId: 'mf32'}, {city:'Bolivia Is not A city', portId: 'zovf'}]} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
