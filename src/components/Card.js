import React from 'react'

export default function Card({content}) {

    return (
        <div className="card" data-id={content.id}>
            <div className="card-image">
                <img src={content.image} alt={content.imageAlt} />
            </div>
            <div className="card-detail">
                <div className="title">
                    <p>{content.title}</p>
                </div>
                {
                    (!(content.rating === undefined)) 
                    && 
                    (
                    <div className="rating-section">
                        <div className="rating">
                            <i className="lni lni-star-filled"></i>
                            <span>{content.rating[0]}</span>
                        </div>
                        <div className="rate-by">
                            ({content.rating[1]})
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}
