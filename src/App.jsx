import React from "react";

import Nav from "./Components/Nav/nav";
// import Indicators from "./Components/Indicators/indicators";
import Routes from "./Components/Routes";

import "./App.css";

function App () {
    return (
      <div>
        <nav>
          <Nav />
        </nav>
        <main>
          <Routes />
        </main>
      </div>
    );
  }
export default App;
