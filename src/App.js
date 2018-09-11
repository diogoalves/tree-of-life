import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ForceGraph2D, ForceGraph3D } from 'react-force-graph';


const data = {
  "nodes": [
    { id: 1, name: "Kether" },
    { id: 2, name: "Chokmah" },
    { id: 3, name: "Binah" },
    { id: 4, name: "Chesed" },
    { id: 5, name: "Geburah" },
    { id: 6, name: "Tipareth" },
    { id: 7, name: "Netzach" },
    { id: 8, name: "Hod" },
    { id: 9, name: "Yesod" },
    { id: 10, name: "Malkuth" }
  ],
  "links": [
    { source: 10, target: 9 },
    { source: 9, target: 8 },
    { source: 9, target: 7 },
    { source: 9, target: 6 },
    { source: 8, target: 7 },
    { source: 8, target: 6 },
    { source: 8, target: 5 },
    { source: 7, target: 6 },
    { source: 7, target: 4 },
    { source: 6, target: 5 },
    { source: 6, target: 4 },
    { source: 6, target: 3 },
    { source: 6, target: 2 },
    { source: 6, target: 1 },
    { source: 5, target: 4 },
    { source: 5, target: 3 },
    { source: 5, target: 2 },
    { source: 4, target: 3 },
    { source: 4, target: 2 },
    { source: 3, target: 2 },
    { source: 3, target: 1 },
    { source: 2, target: 1 },
  ]
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ForceGraph3D graphData={data} showNavInfo nodeAutoColorBy="id" />,
        <ForceGraph2D graphData={data} showNavInfo nodeAutoColorBy="id" />,
      </div>
    );
  }
}

export default App;
