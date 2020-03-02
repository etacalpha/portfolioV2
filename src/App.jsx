import React, { Component } from "react";

import Index from "./Components/Index/index";
import Nav from "./Components/Nav/nav";
import Portfolio from "./Components/Portfolio/portfolio";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Indicators from "./Components/Indicators/indicators";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    let myWork = require("./Assets/projects.json");

    return (
      <div className="app">
        
        <nav>
          <Nav />
        </nav>

        <main>
        <Indicators />
          
            <Index />
            <About />
            <Portfolio work={myWork} />
            <Contact />
        </main>
      </div>
    );
  }
}

export default App;
