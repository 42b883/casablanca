import React, { Component } from 'react';
// import s from './Introduction.module.css';
import s2 from './AboutUs.module.css';
import hoverIcon from '../img/about/hoverIcon.png';

class AboutUs extends Component {

    render() {
        return (
            <div className={s2.introduction}>
                <div className={s2.textWrapper}>
                    <h1>{this.props.header}</h1>
                    <div id={s2.dashline}></div>
                    <p>{this.props.p}</p>
                </div>
                <div>
                    <div className={s2.personWrap}>
                        <div className={s2.person}>
                            <div id={s2.person1}>
                            <div className={s2.hoverIcon}>
                                    <img src={hoverIcon} alt="icon" />
                                </div>
                                <div id={s2.hoverInfo}>
                                    <h3>John</h3>
                                    <p>CEO/founder</p>
                                </div>
                            </div>

                        </div>

                        <div id={s2.person2}>
                        <div className={s2.hoverIcon}>
                                    <img src={hoverIcon} alt="icon" />
                                </div>
                                <div id={s2.hoverInfo}>
                                    <h3>Helsey</h3>
                                    <p>Backend dev</p>
                                </div>
                        </div>
                        <div id={s2.person3}>
                        <div className={s2.hoverIcon}>
                                    <img src={hoverIcon} alt="icon" />
                                </div>
                                <div id={s2.hoverInfo}>
                                    <h3>Kelsey</h3>
                                    <p>Frontend dev</p>
                                </div>
                        </div>
                        <div id={s2.apply}>
                            <div id={s2.applyHover}>
                                <h2>We are hiring</h2>
                                <div id={s2.dashline}></div>
                                <h3>Apply</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default AboutUs;