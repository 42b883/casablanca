import React, { Component } from 'react';
import s from './Video.module.css';
import playIcon from '../img/playIcon.png';

class Video extends Component {

    render() {
        return (
            <div className={s.video}>
                <div id={s.videoContainer}>
                    <div id={s.videoWrapper}>
                        <video src="https://app.coverr.co/s3/mp4/abcd.mp4"
                            autoplay="autoplay"
                            loop="loop"
                            muted="muted"
                        >

                        </video>
                        <div id={s.videoOverlay}></div>
                        <div id={s.playIcon}>
                            <img src={playIcon} alt="play icon" />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Video;