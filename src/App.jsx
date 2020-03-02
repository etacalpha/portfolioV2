import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./Components/Index/index";
import Nav from "./Components/Nav/nav";
import Portfolio from "./Components/Portfolio/portfolio";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Indicators from "./Components/Indicators/indicators";

import "./App.css";

export default function App() {
  let myWork = require("./Assets/projects.json");
  return (
    <Router>
      <Indicators />
      <nav>
        <Nav />
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" render={(props) => <Portfolio work={myWork} {...props}/>} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </Router>
  );
}
