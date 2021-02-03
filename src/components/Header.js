import React from 'react'
import logo97k from '../assets/97k_logo.png'
import NavBar from './NavBar'

export default function Header({ sideMenuFn }) {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo97k} alt="97k"/>
                </div>
                <NavBar />
                <button className="menu-btn btn" onClick={sideMenuFn} >
                    <i className="lni lni-menu"></i>
                </button>
            </div>
        </header>
    )
}
