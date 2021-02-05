import React, { useRef } from 'react'
import NavBar from './NavBar'

export default function SideNav({ sideMenu }) {

    const navRef = useRef()

    const navCloseHandler = (e) => {
        if(e.target.classList.contains('nav-link')) {
            
            document.querySelector('.menu-btn').children[0].classList.add('lni-menu');
            document.querySelector('.menu-btn').children[0].classList.remove('lni-close');           

            sideMenu.current.classList.remove('toggle-menu');        
            sideMenu.current.classList.contains('toggle-menu') ? 
            document.body.style.overflowY = 'hidden' :
            document.body.style.overflowY = 'scroll';
        }
    }

    return (
        <div className='side-nav' ref={sideMenu}>
            <NavBar navRef={navRef}  navClose={navCloseHandler} />
        </div>
    )
}
