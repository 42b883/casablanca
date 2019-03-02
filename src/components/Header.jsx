import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {

        const menuList = this.props.menuItems.map(item => {
            return <li key={item.id}>{item.content}</li>
        })
        return (

            <header id="header">
                    <nav>
                        <label htmlFor="toggle">&#9776;</label>
                        <input type="checkbox" id="toggle"/>
                        <div className="menu">
                            <ul>
                                {menuList}
                            </ul>
                        </div>
                    </nav>
                <div id="header-main">
                    <h1>{this.props.header}</h1>
                    <div id="dashline"></div>
                    <p>{this.props.p}</p>
                    <div id="span"></div>
                </div>


            </header>

        )
    }
}

export default Header