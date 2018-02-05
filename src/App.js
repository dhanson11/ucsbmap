import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CampusMap from './frontend/components/CampusMap/CampusMap'

class App extends Component {
        
    constructor(props) {
      super(props);
   
      this.state = {
        greeting: "This is a greeting" 
      }
    } 
 
    componentDidMount() {
        fetch("/greet").then(function(response) {
               return response.text();
            }).then((text) => {
                  this.setState({greeting: text})
                });
     }
 
    render() {
     return (
      <div className="App">
        <p>{this.state.greeting}</p>
        <CampusMap />
      </div>
    );
  }
}

export default App; 