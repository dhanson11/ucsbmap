import React, { Component } from 'react';
import { Polygon, Popup } from 'react-leaflet'

class Location extends React.Component {
  render() {
    return (
      <div>
        <Polygon id='location' color="grey" positions={this.props.positions}>
          <Popup>
            <span>
               {this.props.name}
             </span>
          </Popup>
        </Polygon>
      </div>
    );
  }
}


export default Location