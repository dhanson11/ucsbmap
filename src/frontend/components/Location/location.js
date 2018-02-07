import React, { Component } from 'react';
import { Polygon, Popup } from 'react-leaflet'

class Location extends React.Component {
  render() {
    return (
      <div>
        <Polygon id='location' color="red" positions={this.props.positionList}>
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