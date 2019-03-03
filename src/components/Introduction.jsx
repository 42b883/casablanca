import React, { Component } from 'react';
import s from './Introduction.module.css';

class Introduction extends Component {

    render() {
        return (
            <div className={s.introduction}>
                <div className={s.textWrapper}>
                    <h1>{this.props.header}</h1>
                    <div id={s.dashline}></div>
                    <p>{this.props.p}</p>
                </div>
                <div id={s.introBg}>
                    <span>{this.props.bgText}</span>
                </div>


            </div>
        )

    }
}

export default Introduction