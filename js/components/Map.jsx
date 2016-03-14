import React from 'react'
import L from 'mapbox.js'

class Map extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.map = new L.mapbox.map(
        this.refs.map, 'mapbox.streets',
        {
          accessToken:'pk.eyJ1IjoidGFhaGFjb2RlcyIsImEiOiJjaWxjdjIycHozb3VudHVseDl0bnZtZHZqIn0.VAO0WZamTQqpZ8y5DH1Iaw'
        }
      ).setView([37.00, -120.00], 4);
    }, 10)
  }

  render() {
    return (
      <div ref='map' id='map' className="map"></div>
    )
  }
}

Map.displayName = 'Map'
Map.propTypes = {

}

export default Map
