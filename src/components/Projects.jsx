import React, { Component, Fragment }  from 'react';
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
                imageUrl: branding1,
                info: 'Google mail'
            },
            {
                id: 2,
                category: 'fruits',
                imageUrl: branding2,
                info: 'Just for you'
            },
            {
                id: 3,
                category: 'fruits',
                imageUrl: branding3,
                info: 'Fresh'
            }, {
                id: 4,
                category: 'vegetables',
                imageUrl: illustrations1,
                info: 'Yandex mail'
            }, {
                id: 5,
                category: 'vegetables',
                imageUrl: webDesign1,
                info: 'Ace'
            }, {
                id: 6,
                category: 'another',
                imageUrl: mobileUI1,
                info: 'The best'

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
            return (
               <Fragment >
                     <div key={item.id}  className={s.imgWrapper0}> <img src={item.imageUrl} />
                    <div id={s.textHover}>
                            <h5>{item.category}</h5>
                            <h3>{item.info}</h3>
                            <div id={s.orangeDashline}></div>
                        </div>
                        </div>
               </Fragment>
               
                
            )
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
                        {imageGal}
                        {/* <div id={s.textHover}>
                            <h1>h1h1h1h1h1h1h1</h1>
                        </div> */}
                    </div>
                    <div id={s.btnWrapper}>
                    <div id={s.btn}>Show me more</div>

                    </div>

                </div>
            </div>
        )

    }
}

export default Projects
