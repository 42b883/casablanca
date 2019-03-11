import React, { Component, Fragment } from 'react';
import PhotoGallery from './PhotoGallery.jsx';
import s from './Projects.module.css';

import branding1 from "../../img/projects/projects_branding1.jpg";
import branding2 from "../../img/projects/projects_branding2.jpg";
import branding3 from "../../img/projects/projects_branding3.jpg";
import illustrations1 from "../../img/projects/projects_illustrations1.jpg";
import webDesign1 from "../../img/projects/projects_webDesign1.jpg";
import mobileUI1 from "../../img/projects/projects_mobileUI1.jpg";

class Projects extends Component {
    render() {
        return (
            <div id={s.projects}>
                <div className={s.wrapper}>
                    <h1>{this.props.header}</h1>
                    <div id={s.dashline}></div>
                    <PhotoGallery />
                    <div id={s.btnWrapper}>
                        <div id={s.btn}>Show me more</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
