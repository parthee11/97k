import React from 'react'
import { Link } from 'react-router-dom'

export default function Jumbotron() {
    const externalLinkHandler = (url) => {
        window.open(url, '_blank')
    }
    return (
        <div className="jumbotron">
            <div className="jumbotron-backdrop"></div>
            <div className="container">
                {/* slider if needed */}
                <div className="content">
                    <div className="content-left">
                        <h1>
                            Welcome to <span>97k</span><br/>daily suggestions
                        </h1>
                        <h2>Why to follow?</h2>
                        <p>
                        Ever found something that you thought will be worth your time, only to later regret that you could have found a better one? - Be it Books, Movies, TV Series, Apps (or) Podcasts.<br/><br/> <strong> That's where I come in to ease your search!😉 </strong>
                        </p>
                    </div>
                    <div className="content-right"></div>
                    <div className="social-media">
                        <div className="sm-icons">
                            Follow |&nbsp;
                            <Link to="/" className="instagram" onClick={() => externalLinkHandler('https://www.instagram.com')} >
                                <i className="lni lni-instagram-original"></i>
                            </Link>
                            <Link to="/" className="twitter" onClick={() => externalLinkHandler('https://www.twitter.com')}>
                                <i className="lni lni-twitter-original"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
