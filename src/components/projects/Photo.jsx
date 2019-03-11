import React, { Component } from 'react';
import s from './Projects.module.css';

{/*Create a layout component for one photo*/ }

const Photo = (props) => {
        return (

            <div className={s.imgWrapper0} data-category={props.category} >
                <img src={props.imageUrl} />
                <div id={s.textHover}>
                    <h5>{props.category}</h5>
                    <h3>{props.info}</h3>
                    <div id={s.orangeDashline}></div>
                </div>
            </div>

        )
};

export default Photo;
