import React, { Component } from 'react';
// import s from './Introduction.module.css';
import s2 from './AboutUs.module.css';
import hoverIcon from '../img/about/hoverIcon.png';

class AboutUs extends Component {

    render() {
        return (
            <div id={s2.introduction}>
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
                                    <h3>{this.props.person1}</h3>
                                    <p>{this.props.p1}</p>
                                </div>
                            </div>

                        </div>

                        <div id={s2.person2}>
                        <div className={s2.hoverIcon}>
                                    <img src={hoverIcon} alt="icon" />
                                </div>
                                <div id={s2.hoverInfo}>
                                    <h3>{this.props.person2}</h3>
                                    <p>{this.props.p2}</p>
                                </div>
                        </div>
                        <div id={s2.person3}>
                        <div className={s2.hoverIcon}>
                                    <img src={hoverIcon} alt="icon" />
                                </div>
                                <div id={s2.hoverInfo}>
                                    <h3>{this.props.person3}</h3>
                                    <p>{this.props.p3}</p>
                                </div>
                        </div>
                        <div id={s2.apply}>
                            <div id={s2.applyHover}>
                                <h2>{this.props.header2}</h2>
                                <div id={s2.dashline}></div>
                                <h3>{this.props.apply}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default AboutUs;