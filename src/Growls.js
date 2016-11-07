import Growl from './Growl.js';
import React, {Component} from 'react';
import firebase from './utils/firebase.js';
import _ from 'lodash';

export default class Growls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      growls: []
    }
  }

  componentDidMount() {
    firebase.database().ref('/growls').on('value', snapshot => {
      let growls = snapshot.val();
      this.setState({ growls });
    });
  }

  render(){
    return(
      <div>
      <h1>Hello</h1>
      <ul>
        {console.log(this.state.growls)}
        {_.map(this.state.growls, (g, index) => <li key={index}>{g.growl}</li>)}
      </ul>
      </div>
    )
  }
}
