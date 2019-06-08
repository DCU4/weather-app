import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../presentational/Nav.jsx";
import About from "../presentational/About.jsx";
import { Work } from "../presentational/Work.jsx";

class Container extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleMode = this.handleMode.bind(this);
    this.state = {
      isAboutShowing: false,
      darkMode: false
    };
  }

  handleShow() {
    this.setState(
      {
        isAboutShowing: this.state.isAboutShowing == false ? true : false
      },
      // () => console.log(this.state)
    );
  }

  handleMode() {
    this.setState(
      {
        darkMode: this.state.darkMode == false ? true : false
      },
      // () => this.state.darkMode ? document.body.classList ='dark-mode' : ''
    );
  }

  

  render() {
    
    const isAboutShowing = this.state.isAboutShowing;
    const darkMode = this.state.darkMode;
    darkMode ? document.body.classList = 'dark-mode' : document.body.classList =  '';

    return (
      <div className={darkMode ? 'container dark-mode' : 'container'}>
        <header>
          <h1 className="title">
            <a className={darkMode ? 'dark-mode' : ''} href="/">Dylan Connor</a>
          </h1>
          <p onClick={this.handleMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</p>
        </header>
        <Nav onClick={this.handleShow} darkMode={darkMode ? 'dark-mode' : ''} />

        {isAboutShowing ? (
          <About
          darkMode={darkMode ? 'dark-mode' : ''}
          />
        ) : (
          <main>
            <Work
              title="Avnoe"
              link="https://kee-app.herokuapp.com/login"
              img="img/drawing-upload-final.gif"
              info="A Node.js, JavaScript, and Canvas digital journal web app."
              darkMode={darkMode ? 'dark-mode' : ''}
            />
            <Work
              title="J.Walls"
              link="https://dcu4.github.io/DCU4.github.io-J_Walls/"
              img="img/jwalls-gif.gif"
              info="An HTML, SASS/SCSS, and JavaScript website for musician J.Walls (that's me!)."
              darkMode={darkMode ? 'dark-mode' : ''}
            />
            <Work
              title="Esther Rivas"
              link="https://dcu4.github.io/DCU4.github.io-Esther-Rivas/index.html"
              img="img/esther.gif"
              info="An HTML, SASS/SCSS, and JavaScript website for a friend who is a painter."
              darkMode={darkMode ? 'dark-mode' : ''}
            />
          </main>
        )}
      </div>
    );
  }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
