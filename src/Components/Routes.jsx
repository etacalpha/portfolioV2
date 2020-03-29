import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "./Index/index";
import Portfolio from "./Portfolio/portfolio";
import About from "./About/about";
import Contact from "./Contact/contact";
import Resume from "./Resume/Resume"

class Routes extends React.Component {
  render() {
    let myWork = require("../Assets/projects.json");
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route
          path="/portfolio"
          render={props => <Portfolio work={myWork} {...props} />}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
    );
  }
}
export default Routes;
