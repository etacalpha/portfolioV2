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
    this.state = { currentPage: 0 };
    this.pageChange = this.pageChange.bind(this);
  }

  pageChange(value) {
    this.flipPage.gotoPage(value);
  }

  render() {
    let myWork = require("./Assets/projects.json");

    return (
      <div className="app">
        
        <nav>
          <Nav pageChange={this.pageChange} />
        </nav>

        <main>
        <Indicators currentPage={this.state.currentPage} />
          <FlipPage
            ref={component => {
              this.flipPage = component;
            }}
            orientation={'horizontal'}
            loopForever={true}
            responsive={true}
            uncutPages={true}
            firstComponent={Index}
            onPageChange={pageIndex => {
              this.setState({ currentPage: pageIndex });
            }}
          >
            <Index />
            <About />
            <Portfolio work={myWork} />
            <Contact />
          </FlipPage>
        </main>
      </div>
    );
  }
}

export default App;
