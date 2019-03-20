import React, { Component } from 'react';
import s from './Footer.module.css';
import footerIcon from '../img/footer__icon.jpg';

class Footer extends Component {

    render() {
        return (
           <footer id="footer">
               <div id={s.contentWrapper}>
               <div id={s.wrap}>
               <img src={footerIcon} alt="footer icon"/>
                <div id={s.header}>
                <h1>{this.props.footerHeader}</h1>
                <span>{this.props.spec}</span>
                </div>
               </div>
               
               
                <p id={s.rights}>2014 © <span id={s.owner}>{this.props.footerHeader}</span>  {this.props.year}</p>
               </div>
           </footer>
        )

    }
}

export default Footer;