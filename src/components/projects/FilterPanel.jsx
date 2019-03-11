import React, {Component} from 'react';
import s from './Projects.module.css';

{/*Create a component of the filter panel*/}

const FilterPanel = (props) => {
        return (
            <li className={s.imageHeading} onClick={props.onClick}>{props.category}</li>
        )
};

export default FilterPanel;