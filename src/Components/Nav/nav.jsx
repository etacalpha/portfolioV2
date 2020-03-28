import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <section id={'navbar'}>
        <header className="title">
          <Link to="/">SB</Link>
        </header>
        <section className="links">
        <Link to="/about">About</Link>
        <Link to="/portfolio">Projects</Link>
        <Link to="/contact">Contact</Link> 
        <Link to="/resume">Resume</Link> 
        </section>
      </section>
    );
  }
}
export default Nav;
