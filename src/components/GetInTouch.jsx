import React, { Component } from 'react';
import s from './GetInTouch.module.css';

class GetInTouch extends Component {

    render() {
        return (
            <div className={s.introduction}>
                <div className={s.textWrapper}>
                    <h1>{this.props.header}</h1>
                    <div id={s.dashline}></div>
                    <p>{this.props.p}</p>
                </div>
                <section id={s.container}>
                    <div id={s.contacts}>
                        <div id={s.location}>
                            <div id={s.locationItem}>
                                <h1>{this.props.locationHeader}</h1>
                                <span>{this.props.address}</span>
                                <div id={s.logos}>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-vimeo-v"></i>
                                <i class="fab fa-behance-square"></i>
                                </div>
                            </div>
                        </div>
                        <div id={s.submitBlock}>
                            <div id={s.submitItem}>
                            <input 
                             id={s.nameInput} 
                             type="text"
                             placeholder="Name"
                             />
                            <input 
                            type="email"
                            placeholder="Email"/>
                            <input
                             id={s.emailInput} 
                             type="text"
                             placeholder="Message"
                             />
                            <input value="Send" type="submit"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )

    }
}

export default GetInTouch;