import React from 'react';
import s from '../../WhyChooseUs.module.css';

const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
            <i  aria-hidden="true"></i>
        </div>
    )
}

export default RightArrow;