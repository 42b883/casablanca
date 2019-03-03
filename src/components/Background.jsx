import React from 'react';
import s from './Background.module.css';

const Background = ({bgText}) => { 

        return ( 
            <div className={s.BackgrondContainer}>
                 <div id={s.introBg}>
                    <img src={require("../img/Introduction_bg.jpg")} alt=""/>
                    <span>{bgText}</span>
                </div>
            </div>            
               
        )

    }


export default Background;