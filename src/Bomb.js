import React, { Component } from 'react';

class Bomb extends Component {


  constructor(initialCount) {
    super(initialCount);
    this.state = {
      secondsLeft: this.props.initialCount
    };
  }

  render() {
    return (
      <div>
       {this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    );
  }
}

export default Bomb;