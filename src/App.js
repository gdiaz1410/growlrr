import React, {Component} from 'react';
import firebase from './utils/firebase.js';
import defaultfirebase from 'firebase';
import './App.css';
import _ from 'lodash';
import Growls from './Growls.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('logged in:', user);
        this.setState({user});
      } else {
        // No user is signed in.
        this.setState({ user: {} })
        console.log('not logged in');
      }
    });
  }

  _handleLogout(e) {
    e.preventDefault();
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  }

  _handleLogin(e) {
    e.preventDefault();
    var provider = new defaultfirebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  _sessionButton() {
    let sessionButton;
    if (_.isEmpty(this.state.user)) {
      return <button onClick={(e) => this._handleLogin(e)}>Login</button>
    } else {
      return <button onClick={(e) => this._handleLogout(e)}>Logout</button>
    }
  }

  render() {
    return (
      <div className="App">
        {this._sessionButton()}
        <h1>Growlrrrr</h1>
        <Growls user={this.state.user} />
      </div>
    );
  }
}

export default App;
