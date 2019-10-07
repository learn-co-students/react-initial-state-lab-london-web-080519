// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props){
        super()
        this.state= {
            secondsLeft: props.initialCount
        }
    }

    
    render(){
        let textToRender
            
            if (this.state.secondsLeft === 0) {
                textToRender= 'Boom!'
            } else {
                textToRender= `${this.state.secondsLeft} seconds left before I go boom!`
            }    
        
        return (
            <div>{textToRender}</div>
        )
    }
}
