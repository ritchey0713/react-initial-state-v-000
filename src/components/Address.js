import React, { Component } from "react";

export default class Address extends Component{
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     fullAddress: `${props.street}, ${props.city}`
  //   }
  // }
  render(){
    return (
      <div className="address">
      {this.props.street}, {this.props.city}
      </div>
    )
  }
}
