import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import logoPin from '../logoPin.png';

const CustomMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: 0, lng: 32.4637 }}
  >
    {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />} */}
    <Marker position={{ lat: 0.0917, lng: 34.7680 }} onClick={props.onMarkerClick} icon={logoPin} />
    <Marker position={{ lat: -2.5164, lng: 32.9175 }} onClick={props.onMarkerClick} icon={logoPin} />
    <Marker position={{ lat: -1.3296, lng: 31.8050 }} onClick={props.onMarkerClick} icon={logoPin} />
    <Marker position={{ lat: 0.0512, lng: 32.4637 }} onClick={props.onMarkerClick} icon={logoPin} />
    <Marker position={{ lat: 0.2978, lng: 32.6532 }} onClick={props.onMarkerClick} icon={logoPin} />
    <Marker position={{ lat: 0.4479, lng: 33.2026 }} onClick={props.onMarkerClick} icon={logoPin} />
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <CustomMap
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
export default CustomMap;
