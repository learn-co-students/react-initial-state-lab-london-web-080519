// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {

        let countdown = setTimeout(() => {
            this.setState({secondsLeft: this.state.secondsLeft - 1})
        }, 1000);

        if (this.state.secondsLeft === 0) {
            clearTimeout(countdown)
        }

        return this.state.secondsLeft === 0 ? (
            <div>Boom!</div>
        ) : (
            <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        )
    }
}