import React from "react";

import Nav from "./Components/Nav/nav";
// import Indicators from "./Components/Indicators/indicators";
import Routes from "./Components/Routes";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Indicators /> */}
        <nav>
          <Nav />
        </nav>
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}
export default App;
