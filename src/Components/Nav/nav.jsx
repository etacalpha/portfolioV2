import React, { Component } from "react";

import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <header className="title">
          <h1
            onClick={() => {
              this.props.pageChange(0);
            }}
          >
            SB
          </h1>
        </header>
        <section className="links">
          <a
            href="#about"
            onClick={() => {
              this.props.pageChange(1);
            }}
          >
            About
          </a>
          <a
            href="#creations"
            onClick={() => {
              this.props.pageChange(2);
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => {
              this.props.pageChange(3);
            }}
          >
            Contact
          </a>
        </section>
      </nav>
    );
  }
}
export default Nav;
