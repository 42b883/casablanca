import React, { Component } from 'react';
import s from './Clients.module.css';

class Clients extends Component {

    render() {
        return (
            <div className={s.clients}>
            <h1>{this.props.header}</h1>
                <div id={s.dashline}></div>
                <div className={s.wrapper}>
                    <div id={s.imgWrapper}>
                    <img src={require("../img/clients/clients_google.png")} alt=""/>
                    <img src={require("../img/clients/clients_samsung.png")} alt=""/>
                    <img src={require("../img/clients/clients_flickr.png")} alt=""/>
                    <img src={require("../img/clients/clients_fs.png")} alt=""/>
                    <img src={require("../img/clients/clients.pinterest.png")} alt=""/>
                    </div>
                   
                </div>
            </div>
        )

    }
}

export default Clients;