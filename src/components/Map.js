import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_KEY
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: {lng: this.props.markers.longitude, lat: this.props.markers.latitude},
      zoom: this.props.zoom
    })

    const markerElement = document.createElement('div')
    markerElement.className = 'custom-marker'
    return new mapboxgl.Marker(markerElement)
      .setLngLat({ lat: this.props.markers.latitude, lng: this.props.markers.longitude})
      .addTo(this.map)
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
