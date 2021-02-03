import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Books</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Tech news</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Aow</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Tv series</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Movies</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Podcasts</Link>
                </li>
            </ul>
        </nav>
    )
}
