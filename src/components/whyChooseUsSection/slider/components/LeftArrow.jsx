import React from 'react';
import s from '../../WhyChooseUs.module.css';

const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
            <i  aria-hidden="true"></i>
        </div>
    )
}


export default LeftArrow;