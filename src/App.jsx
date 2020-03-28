import React from "react";

import Nav from "./Components/Nav/nav";
// import Indicators from "./Components/Indicators/indicators";
import Routes from "./Components/Routes";

import "./App.css";

function App() {
  return (
    <article className={"app"}>
      <section  className={"nav"}>
      <Nav />
      </section>
      <section className={"pages"} >
      <Routes />
      </section>
    </article>
  );
}
export default App;
