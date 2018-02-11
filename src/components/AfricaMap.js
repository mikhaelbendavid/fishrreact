import {

  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
var React = require('react');

class AfricaMap extends React.Component {
  render() {
    return (
      <div style={{border: '1px solid black'}} >
        <div>
          <ComposableMap>
            <ZoomableGroup>
              <Geographies geography={ '../../topojson-maps/world.json' }>
                {
                  (geographies, projection) => {
                    console.log({geographies})
                    console.log({projection})
                  return geographies.map(geography => (
                  <Geography
                    key={ geography.id }
                    geography={ geography }
                    projection={ projection }
                    />
                ))
              }}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
      </div>
        <p>I Africa you</p>
      </div>
    );
  }
}

export default AfricaMap;
