import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar({navRef, navClose}) {
    return (
        <nav ref={navRef} onClick={navClose} >
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/books" className="nav-link" activeClassName="nav-link-active" >Books</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to="/" className="nav-link" activeClassName="nav-link-active">Tech news</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" activeClassName="nav-link-active">Aow</NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink to="/movies" className="nav-link" activeClassName="nav-link-active">Movies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/tvSeries" className="nav-link" activeClassName="nav-link-active">Tv series</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/podcasts" className="nav-link" activeClassName="nav-link-active">Podcasts</NavLink>
                </li>
            </ul>
        </nav>
    )
}
