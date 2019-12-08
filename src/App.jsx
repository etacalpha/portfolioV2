import React, { Component } from "react";

import FlipPage from "react-flip-page";

import Index from "./Components/Index/index";
import Nav from "./Components/Nav/nav";
import Portfolio from "./Components/Portfolio/portfolio";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <Nav />
        </nav>
        <main>
          <FlipPage
            ref={component => {
              this.flipPage = component;
            }}
            className="FlipPage"
            loopForever={true}
            responsive={true}
          >
            <Index />
            <About />
            <Portfolio />
            <Contact />
          </FlipPage>
        </main>
      </div>
    );
  }
}

export default App;
