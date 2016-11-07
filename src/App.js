import React, { Component } from 'react';
import firebase from './utils/firebase.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Growlrrrr</h1>
        <Growls />
      </div>
    );
  }
}

export default App;
