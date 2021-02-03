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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deleniti necessitatibus rem fugiat earum explicabo nesciunt expedita veritatis perspiciatis delectus facere odit in nostrum iste quos eaque dolores doloremque, harum aliquam ipsa. Voluptatum nulla ea autem dolorum a inventore dolorem laboriosam! Reiciendis accusamus in blanditiis natus quod, fuga ipsam provident?</p>
                    </div>
                    <div className="content-right"></div>
                    <div className="social-media">
                        <div className="sm-icons">
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
