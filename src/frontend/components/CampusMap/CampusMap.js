import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Polygon } from 'react-leaflet'
import Locations from '../Location/locations'

class CampusMap extends React.Component {
  render() {
    const position = [34.4127, -119.8492]
    return (
      <Map id='map' center={position} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png'
        />
        
        <Locations />
        
      </Map>
    );
  }
}


export default CampusMap