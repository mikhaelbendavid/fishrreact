import logo from '../logo.svg';
var React = require('react');

class Ports extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection:'column'}}>
        {
          this.props.portCities.map((portCity)=> {
            return (
              <div key={portCity.portId} style={{border: '1px solid black', display: 'inline-flex', flexDirection: 'row', justifyContent: 'flex-start'}} >
                <img src={logo} className="App-logo" alt="logo" style={{border:'1px solid red', display: 'inline'}} />
                <h5 style={{margin: 0, border: '1px solid red', display: 'inline', textAlign:'center'}} >{portCity.city}</h5>
              </div>

            )
          })
        }
      </div>
    );
  }
}

export default Ports;
