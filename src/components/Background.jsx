import React from 'react';
import s from './Background.module.css';

class Background extends React.Component { 
    render(){
        return ( 
            <div className={s.BackgrondContainer}>
                 <div id={s.introBg}>
                    <img src={this.props.imgBg} alt=""/>
                    <span>{this.props.bgText}</span>
                </div>
            </div>            
               
        )
        }
       

    }


export default Background;