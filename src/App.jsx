import React, { Component } from "react";

import Index from "./Components/Index/index";
import Nav from "./Components/Nav/nav";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <main>
          <Index />
          <About />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
