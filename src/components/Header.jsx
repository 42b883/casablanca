import React, { Component } from 'react';
import s from './Header.module.css';

class Header extends Component {

    render() {

        const menuList = this.props.menuItems.map(item => {
            return <li key={item.id}>{item.content}</li>
        })
        return (

            <header id={s.header}>
                    <nav>
                        <label htmlFor={s.toggle}>&#9776;</label>
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