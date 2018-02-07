import React, { Component } from 'react';
import { Polygon, Popup } from 'react-leaflet'
import Location from './location'
import StreamArray from 'stream-json/utils/StreamArray'
import fs from 'fs'
import ucsbBuildings from '../../../util/ucsbBuildings.js'


class Locations extends React.Component {
  constructor() {
    super()
    
    this.buildings = []
  }
  
  componentWillMount() {
    this.setUpBuildings()
  }
  
  setUpBuildings() {
    ucsbBuildings.features.forEach(building => {
      if(building.properties.name && building.geometry.type === "polygon" && !building.properties.type){
        
        if(building.properties.name === "Tower")
          console.log(building);
        var corners = []
        
        building.geometry.coordinates.forEach(coordinates => {
          coordinates.forEach(coord => {
            
            corners.push([coord[1], coord[0]])
          })
        })
        
        var parsedBuilding = {name:`${building.properties.name}`, corners:corners}
        this.buildings.push(parsedBuilding)
      }
    })
  }
  
  
  
  render() {
    var buildingComponents = this.buildings.map(building => {
      return(
        <div>
          <Location name={building.name} positions={building.corners} />
        </div>
      )
    })
    
    return (
      <div>
        {buildingComponents}
      </div>
    )
  }
}


export default Locations