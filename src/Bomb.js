// your Bomb code here!
import React, { Component } from "react";
// import ImageSlider from './ImageSlider.js'

export default class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = { secondsLeft: this.props.initialCount };
  }
  render() {
    return this.state.secondsLeft === 0
        ? `Boom!`
        : `${this.state.secondsLeft} seconds left before I go boom!`;
}
}
