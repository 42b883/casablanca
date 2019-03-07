import React, { Component } from 'react';
import s from './Projects.module.css';

import branding1 from "../img/projects/projects_branding1.jpg";
import branding2 from "../img/projects/projects_branding2.jpg";
import branding3 from "../img/projects/projects_branding3.jpg";
import illustrations1 from "../img/projects/projects_illustrations1.jpg";
import webDesign1 from "../img/projects/projects_webDesign1.jpg";
import mobileUI1 from "../img/projects/projects_mobileUI1.jpg";

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [{
                id: 1,
                category: 'fruits',
                imageUrl: branding1
            },
            {
                id: 2,
                category: 'fruits',
                imageUrl: branding2
            },
            {
                id: 3,
                category: 'fruits',
                imageUrl: branding3
            }, {
                id: 4,
                category: 'vegetables',
                imageUrl: illustrations1
            }, {
                id: 5,
                category: 'vegetables',
                imageUrl: webDesign1
            }, {
                id: 6,
                category: 'another',
                imageUrl: mobileUI1
            }],
            activeCategory: 'all'
        }
    }
    handleChange = (category) => {
        console.log(category);
    }

    render() {
        const menu = this.props.menu.map(menuItem => {
            return <li className={s.imageHeading}>{menuItem}</li>
        })
        const imageGal = this.state.images.length > 0 && this.state.images.map(item => {
            return <img key={item.id} src={item.imageUrl} />
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
                    <div className={s.imgWrapper}> {imageGal}</div>

                    <div id={s.btn}>Show me more</div>

                </div>
            </div>
        )

    }
}

export default Projects
