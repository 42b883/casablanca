import React, { Component } from 'react';
import s from './WhyChooseUs.module.css';

class WhyChooseUs extends Component {

    render() {
        return (
            <div className={s.introduction}>
                <div className={s.textWrapper}>
                    <h1>{this.props.header}</h1>
                    <div id={s.dashline}></div>
                    <p>{this.props.p}</p>
                </div>
            </div>
        )

    }
}

export default WhyChooseUs;