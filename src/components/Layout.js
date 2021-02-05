import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Layout({data}) {

    const trailerRef = useRef();
    
    const title = data.fields.title;
    const details = data.fields.details.details;
    const description = data.fields.description;
    const available = data.fields.available.available;
    const image = data.fields.image.fields.file.url;
    const imageAlt = data.fields.image.fields.title;
    let trailer;
    let rating;
    if(data.fields.trailer) {
        trailer = [data.fields.trailer];
    } else {
        trailer = undefined;
    }
    if(data.fields.ratingValue) {
        rating = [data.fields.ratingValue, data.fields.ratingBy];
    } else {
        rating = undefined;
    }

    useEffect(() => {
        
        if(trailer !== undefined) {
            trailerRef.current.innerHTML = `
                <a href=${trailer} target="_blank" class="trailer-link">
                    <span>Watch Trailer</span>
                </a>
            `;
        } else {
            trailerRef.current.innerHTML = '';
        }

    }, [trailer]);

    const externalLinkHandler = (url) => {
        window.open(url, '_blank')
    }
    
    return (
        <React.Fragment>
            <div className="content-lay">
                <div className="content-left">
                    <div className="image">
                        <img src={image} alt={imageAlt} />
                    </div>
                </div>
                <div className="content-right">
                    <h2 className="title">{title}</h2>
                    {/* rating section */}
                    {
                        (rating !== undefined)
                        &&
                        (
                            <div className="rating-section">
                                <div className="rating">
                                    <i className="lni lni-star-filled"></i>
                                    <span>{rating[0]}</span>
                                </div>
                                <div className="rate-by">
                                    ({rating[1]})
                                </div>
                            </div>
                        )
                    }
                    {/* details section */}
                    <div className="details">
                        {
                            details.map((detail, index) => {
                                return (
                                    <div className={detail.title} key={index}><span>{detail.title}: </span>{detail.value}</div>
                                )
                            })
                        }
                    </div>
                    <div className="summary-desc">
                        <div><span>Summary: </span></div>
                        <p>{description}</p>
                    </div>
                    {/* available */}
                    <div className="available-links">
                        <div className="links-list">
                            <span>Available:</span>
                            {
                                available.map((avail, index) => {
                                    return (
                                        <span key={index}>
                                            {
                                                (avail.url !== undefined) ?  <Link to="/" className="link" onClick={() => externalLinkHandler(`${avail.url}`)} key={index} >{avail.title}</Link> : avail.title
                                            }
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* embed video */}
                    <div className="trailer" ref={trailerRef}>
                        {/* dynamic load */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
