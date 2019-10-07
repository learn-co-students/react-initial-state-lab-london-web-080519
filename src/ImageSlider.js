// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {
    
    constructor() {
        super ()
        this.state = {
            currentSlideIndex: 0
        }
    }
    
    render(){
        return (
        <div class="image-slider">I am on slide {this.state.currentSlideIndex}</div>
        )
    }
}



// Its initial state should have a property called currentSlideIndex that starts at 0.
// It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.