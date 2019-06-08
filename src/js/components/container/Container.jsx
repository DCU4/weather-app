import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Nav from "../presentational/Nav.jsx";
import Form from "../presentational/Form.jsx";
import Weather from "../presentational/Weather.jsx";
import Svg from "../presentational/Svg.jsx";

const API_KEY = '55f630c614c9ef35570a0ea5e189ade3';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      class: ''
    }
  }

  

  getWeather = async (e) => {
    e.preventDefault();
    // console.log(e.target);
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if (city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined,
        class:'submitted showing '
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a City and Country Code",
        class: ''
      });
    }
  }


  render() {

    return (
      
      <main>
        <h1>Weather App</h1>
        <Form 
          getWeather={this.getWeather}
          error={this.state.error}
          class={this.state.class} 
        />
        <Svg
          class={this.state.class} 
        />
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          class={this.state.class} 
        />
      </main>
    );
  }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
