import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
    
    const image = props.data.fields.image.fields.file.url;
    const title = props.data.fields.title;
    const rating = props.data.fields.rating;
    const rateBy = props.data.fields.ratingBy;
    const author = props.data.fields.author;
    const genre = props.data.fields.genre;
    const pubDate = props.data.fields.published;
    const summary = props.data.fields.summary;
    const links = props.data.fields.links;

    const externalLinkHandler = (url) => {
        window.open(url, '_blank')
    }

    const linksUI = () => (
        <div className="links-list">
            {
                (links.amazon.length > 1) ? <Link to="/" className="link" onClick={() => externalLinkHandler(`${links.amazon[1]}`)} >{links.amazon[0]}</Link> : <span>{links.amazon[0]}</span>
            }&nbsp;,&nbsp;
            {
                (links.google.length > 1) ? <Link to="/" className="link" onClick={() => externalLinkHandler(`${links.google[1]}`)}>{links.google[0]}</Link> : <span>{links.google[0]}</span>
            }&nbsp;&&nbsp;
            {
                (links.zLibrary.length > 1) ? <Link to="/" className="link" onClick={() => externalLinkHandler(`${links.zLibrary[1]}`)}>{links.zLibrary[0]}</Link> : <span>{links.zLibrary[0]}</span>
            }
        </div>
    );
    
    return (
        <React.Fragment>
            <div className="content-lay">
                <div className="content-left">
                    <div className="image">
                        <img src={image} alt={title} />
                    </div>
                </div>
                <div className="content-right">
                    <h2 className="title">{title}</h2>
                    <div className="rating-section">
                        <div className="rating">
                            <i className="lni lni-star-filled"></i>
                            <span>{rating}</span>
                        </div>
                        <div className="rate-by">
                            ({rateBy})
                        </div>
                    </div>
                    <div className="details">
                        <div className="author"><span>Author : </span>{author}</div>
                        <div className="genre"><span>Genre : </span>{genre}</div>
                        <div className="pub-date"><span>Pulished : </span>{pubDate}</div>
                    </div>
                    <div className="summary-desc">
                        <div><span>Summary : </span></div>
                        <p>{summary}</p>
                    </div>
                    <div className="available-links">
                        <div><span>Available : </span></div>
                        {linksUI()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
