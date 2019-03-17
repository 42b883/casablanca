import React, { Component } from 'react';
import s from './Header.module.css';

class Header extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            lang: 'русский'
        }
    }


    changeLang = (e) => {
        const {value} = e.target;
        if(this.state.lang === 'english') {
            this.setState({
                lang: 'русский'
            })
        } else {
        this.setState({
           lang: 'english'
        })
    }
    this.props.getLang(this.state.lang);
    }



    render() {

        const menuList = this.props.menuItems.map(item => {
            return <li key={item.id}>{item.content}</li>
        })
        return (

            <header id={s.header}>
                    <nav>
                        <div id={s.toggleWrap}>
                        <label htmlFor={s.toggle}>&#9776;</label>
                        <div id={s.lang}>
                            <span onClick={this.changeLang}>{this.state.lang}</span> 
                        </div>
                        </div>
                        <input type="checkbox" id={s.toggle}/>

                        <div className={s.menu}>
                            <ul>
                                {menuList}
                            </ul>
                        </div>
                    </nav>
                <div id={s.headerMain}>
                    <h1>{this.props.header}</h1>
                    <div id={s.dashline}></div>
                    <p>{this.props.p}</p>
                    <div id={s.span}></div>
                </div>


            </header>

        )
    }
}

export default Header