import React, { Component } from "react";
// import sun from '../svg/sun.svg';

export default class Svg extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
    <div className={this.props.class+"weather-svg"}>
      <h1>Sunny?</h1>
      <img src={require('./svg/sun.svg')}/>
      {sun}
      {
        //svgs will be here eventually
      }
    </div>
    );
  }
}
