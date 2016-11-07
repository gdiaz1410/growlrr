import React, {Component} from 'react';

class Growl extends Component {
  render(){
    // console.log(this.props.growl);
    return(
      <li>{this.props.growl}</li>
    )
  }
}
