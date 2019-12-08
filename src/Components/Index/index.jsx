import React, { Component } from "react";

import "./index.css";
class Index extends Component {
  constructor(props) {
    super(props);

    const images = [
      "https://placekitten.com/640/360",
      "https://placekitten.com/g/640/360"
    ];

    this.state = {
      images,
      currentImg: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 30000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const { images, currentImg } = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({ currentImg: newCurrentImg });
  }

  render() {
    const { images, currentImg } = this.state;
    const urlString = `url('${images[currentImg]}')`;

    return (
      <article
        className="index"
        style={{ backgroundImage: urlString }}
      ></article>
    );
  }
}
export default Index;
