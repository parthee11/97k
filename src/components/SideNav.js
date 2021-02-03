import React from 'react'
import NavBar from './NavBar'

export default function SideNav({ sideMenu }) {
    return (
        <div className='side-nav' ref={sideMenu}>
            <NavBar />
        </div>
    )
}
