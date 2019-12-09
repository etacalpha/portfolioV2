import React, { Component } from "react";

import "./indicators.css";

class Indicators extends Component {
  render() {
    return (
      <section className="indicator">
        <div
          className={this.props.currentPage === 0 ? "selected" : "unselected"}
        ></div>
        <div
          className={this.props.currentPage === 1 ? "selected" : "unselected"}
        ></div>
        <div
          className={this.props.currentPage === 2 ? "selected" : "unselected"}
        ></div>
        <div
          className={this.props.currentPage === 3 ? "selected" : "unselected"}
        ></div>
      </section>
    );
  }
}
export default Indicators;
