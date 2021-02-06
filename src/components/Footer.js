import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

    const externalLinkHandler = (url) => {
        window.open(url, '_blank')
    }

    return (
        <footer>
            Made with 🧡&nbsp;<Link to='/' onClick={() => externalLinkHandler('https://www.instagram.com/psfrontend/')} >@psfrontend.</Link>&nbsp;97K @ 2021.
        </footer>
    )
}
