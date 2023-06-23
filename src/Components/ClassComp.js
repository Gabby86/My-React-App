import React, { Component } from "react";

 class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'my web',
      level: ''
    }
  }
  
  render() {
    return (
      <div>
        Welcome to {this.state.name} page
      </div>
    )
  }
}
export default ClassComp;