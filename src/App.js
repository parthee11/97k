import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import './css/style.scss'

export default function App() {
    return (
        <Router>
            <Route exact path='/' component={Landing}></Route>
        </Router>
    )
}
