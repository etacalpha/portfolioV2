import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <header className="title">
          <h1>
          <Link to="/">SB</Link>
          </h1>
        </header>
        <section className="links">
        <Link to="/about">About</Link>
        <Link to="/portfolio">Projects</Link>
        <Link to="/contact">Contact</Link> 
        </section>
      </nav>
    );
  }
}
export default Nav;
