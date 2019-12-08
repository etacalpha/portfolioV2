import React, { Component } from "react";

import FlipPage from "react-flip-page";

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
    this.pageChange = this.pageChange.bind(this);
  }

  pageChange(value) {
    this.flipPage.gotoPage(value);
  }
  render() {
    return (
      <div className="app">
        <Indicators />
        <nav>
          <Nav pageChange={this.pageChange} />
        </nav>

        <main>
          <FlipPage
            ref={component => {
              this.flipPage = component;
            }}
            loopForever={true}
            responsive={true}
            firstComponent={Index}
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
