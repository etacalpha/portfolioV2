import React from "react";

import "./nav.css";

function Nav() {
  return (
    <nav>
      <header className="title">
        <h1>SB</h1>
      </header>
      <section className="links">
        <a href="#about">About</a>
        <a href="#creations">Projects</a>
        <a href="#contact">Contact</a>
      </section>
    </nav>
  );
}
export default Nav;
