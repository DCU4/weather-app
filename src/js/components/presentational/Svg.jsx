import React, { Component } from "react";

export default class Svg extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
    <div className={this.props.class+"weather-svg"}>
      <h1>Sunny?</h1>
      {
        //svgs will be here eventually
      }
    </div>
    );
  }
}
