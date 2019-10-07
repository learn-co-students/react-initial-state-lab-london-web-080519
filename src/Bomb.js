// your Bomb code here!
import React from "react";

export default class Bomb extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
      let bombText = ""

      if (this.state.secondsLeft > 0) {
        bombText = `${this.state.secondsLeft} seconds left before I go boom!`
      } else {
        bombText = "Boom!"
      }

      return (
        <div>
          {bombText}
        </div>
      )
  }
}
