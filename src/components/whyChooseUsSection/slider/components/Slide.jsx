import React from 'react';
import s from '../../WhyChooseUs.module.css';

const Slide = ({ image }) => {
    return (
        <div id="sliderEl">
            <img className="slide" src={image}></img>
            {/* <div id="parag"> */}
            <h2>HEl asldfjas</h2>
            <p id="slider-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                ilabore et dolore.
            </p>
            {/* </div> */}
        </div>
    )
}


export default Slide;