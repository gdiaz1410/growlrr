import React, { Component } from 'react';
import firebase from './utils/firebase.js';
import './App.css';
import Growls from './Growls.js';

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
