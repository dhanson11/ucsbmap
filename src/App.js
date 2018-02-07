import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CampusMap from './frontend/components/CampusMap/CampusMap'

class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        headerText: "This is the header text"
      }
    }

    componentDidMount() {
        fetch("/headerText").then(function(response) {
               return response.text();
            }).then((text) => {
                  this.setState({headerText: text})
                });
     }

    render() {
     return (
      <div className="App">
        <p>{this.state.headerText}</p>
        <CampusMap />
      </div>
    );
  }
}

export default App;
