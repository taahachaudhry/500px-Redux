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
      ).setView([-74.50, 40], 9);
    }, 0)
  }

  render() {
    return (
      <div ref='map' id='map'></div>
    )
  }
}

Map.displayName = 'Map'
Map.propTypes = {

}

export default Map
