import React, { Component } from 'react';
import s from './Projects.module.css';

class Projects extends Component {

    render() {
        const menu = this.props.menu.map(menuItem => {
            return <li>{menuItem}</li>
        })
        return (
            <div id={s.projects}>
                <div className={s.wrapper}>
                    <h1>{this.props.header}</h1>
                    <div id={s.dashline}></div>
                    <nav id={s.menu}>
                        <ul>
                            {menu}
                        </ul>
                    </nav>
                    <div className={s.imgWrapper}>
                        <img src={require("../img/projects/projects_branding1.jpg")} alt="" />
                        <img src={require("../img/projects/projects_branding2.jpg")} alt="" />
                        <img src={require("../img/projects/projects_branding3.jpg")} alt="" />
                        <img src={require("../img/projects/projects_illustrations1.jpg")} alt="" />
                        <img src={require("../img/projects/projects_webDesign1.jpg")} alt="" />
                        <img src={require("../img/projects/projects_mobileUI1.jpg")} alt="" />
                    </div>
                    <div id={s.btn}>Show me more</div>
                </div>
            </div>
        )

    }
}

export default Projects