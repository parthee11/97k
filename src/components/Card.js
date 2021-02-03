import React from 'react'

export default function Card({id, image, altImage, title, rating, rateBy}) {
    return (
        <div className="card" data-id={id}>
            <div className="card-image">
                <img src={image} alt={altImage}/>
            </div>
            <div className="card-detail">
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="rating-section">
                    <div className="rating">
                        <i className="lni lni-star-filled"></i>
                        <span>{rating}</span>
                    </div>
                    <div className="rate-by">
                        ({ rateBy })
                    </div>
                </div>
            </div>
        </div>
    )
}
