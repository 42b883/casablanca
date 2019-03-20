import React from 'react';
import s from '../../WhyChooseUs.module.css';

class Slide extends React.Component {
    render() {
        return (
            <div id="sliderEl">
                <img className="slide" src={this.props.image}></img>
                {/* <div id="parag"> */}
                <h2>{this.props.h2}</h2>
                <p id="slider-p">{this.props.p2}</p>
                {/* </div> */}
            </div>
        )
    }
}


export default Slide;