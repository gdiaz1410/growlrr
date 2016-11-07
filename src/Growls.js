import Growl from './Growl.js';
import React, {Component} from 'react';
import axios from 'axios';

export default class Growls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      growls: []
    }
  }
  // axios.get('https://growlrr-76626.firebaseio.com/').then((data) => {
  //     console.log(data);
  // })
  render(){
    return(
      <h1>Hello</h1>
    )
  }
}
