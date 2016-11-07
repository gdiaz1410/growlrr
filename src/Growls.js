import Growl from './Growl.js';
import React, {Component} from 'react';
import firebase from './utils/firebase.js';
import _ from 'lodash';

export default class Growls extends Component {
  constructor(props) {
    super(props)

    this._handleSubmit = this._handleSubmit.bind(this)

    this.state = {
      growls: []
    }
  }

  componentDidMount() {
    firebase.database().ref('/growls').on('value', snapshot => {
      let growls = snapshot.val();
      this.setState({growls});
    });
  }

  _handleSubmit(e) {
    e.preventDefault()
    let growl = this.refs.growl.value;
    let uid = this.props.user.uid;
    firebase.database().ref('/growls').push({
      growl: growl,
      uid: uid
     }).then(() => {
      this.refs.growl.value = '';
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this._handleSubmit}>
        <input type="text" ref="growl"/>
        <input type="submit" value="New Growl"/>
      </form>
      <ul>
        {console.log(this.state.growls)}
        {_.map(this.state.growls, (g, index) => <li key={index}>{g.growl}{' '}<a href="#">Delete</a></li>)}
      </ul>
      </div>
    )
  }
}
