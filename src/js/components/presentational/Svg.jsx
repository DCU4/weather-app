import React, { Component } from "react";

export default class Svg extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
    <div className={this.props.class+"weather-svg"}>
      <h1>Sunny?</h1>
      <section className="weather-groups">
        <div id="mostly-sunny">
          <img className={this.props.class+"sun"} src={require('../../../svg/sun.svg')}/>
          <img className={this.props.class+"clouds"} src={require('../../../svg/cloud.svg')}/>
        </div>
        
      </section>
      
      {/* {Sun} */}
      {
        //svgs will be here eventually
      }
    </div>
    );
  }
}
