import React, { Component } from 'react';
import s from './Clients.module.css';

class Clients extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            flip: false
        }
    }

    onFlip = () =>{
        this.setState({
            flip: true
        })
    }

    render() {
        return (
            <div id={s.clients}>
            <h1>{this.props.header}</h1>
                <div id={s.dashline}></div>
                <div className={s.wrapper}>
                    <div id={s.imgWrapper}>
                    <img onClick={this.onFlip} className={ (this.state.flip ? `${s.flip}` : '')} src={require("../img/clients/clients_google.png")} alt=""/>
                    <img onClick={this.onFlip} className={(this.state.flip ? `${s.flip}` : '')}  src={require("../img/clients/clients_samsung.png")} alt=""/>
                    <img onClick={this.onFlip} className={(this.state.flip ? `${s.flip}` : '')}  src={require("../img/clients/clients_flickr.png")} alt=""/>
                    <img onClick={this.onFlip} className={(this.state.flip ? `${s.flip}` : '')}  src={require("../img/clients/clients_fs.png")} alt=""/>
                    <img  onClick={this.onFlip} className={(this.state.flip ? `${s.flip}` : '')}  src={require("../img/clients/clients.pinterest.png")} alt=""/>
                    </div>
                   
                </div>
            </div>
        )

    }
}

export default Clients;