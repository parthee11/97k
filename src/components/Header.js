import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo97k from '../assets/97k_logo.png'
import NavBar from './NavBar'

export default function Header({ sideMenuFn }) {

    const logoRef = useRef();

    useEffect(() => {
        logoRef.current.addEventListener('click', (e) => {
            document.querySelector('.side-nav').classList.remove('toggle-menu')
            document.querySelector('.menu-btn').children[0].classList.add('lni-menu')
            document.querySelector('.menu-btn').children[0].classList.remove('lni-close')
            document.body.style.overflowY = 'hidden';
            document.body.style.overflowY = 'scroll';
        })

    }, [])

    return (
        <header>
            <div className="container">
                <Link to="/" className="logo" ref={logoRef}>
                    <img src={logo97k} alt="97k"/>
                </Link>
                <NavBar />
                <button className="menu-btn btn" onClick={sideMenuFn} >
                    <i className="lni lni-menu"></i>
                </button>
            </div>
        </header>
    )
}
