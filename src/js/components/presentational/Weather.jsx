import React, { Component } from "react";

export default class Weather extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const deg = <span>&#176;F</span>; //degree symbol
    let temp = this.props.temperature;
    let city = this.props.city;
    let country = this.props.country;
    let description = this.props.description;
    let humidity = this.props.humidity;
    let error = this.props.error;
    
    
    return (
      <section className={this.props.class}>
        <p>{city ? city+"," : ""} {country}</p>
        <p>{temp}<span>{temp ? deg : ""}</span></p>
        <p>{humidity ? humidity+"%" : ""}</p>
        <p>{description}</p>
        <p className={error?'error' : ''}>{error? error : ''}</p>
      </section>
    );

  }
}
