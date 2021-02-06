import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function CategoryPage({ id, categoryName, categoryData, categoryQuote }) {

    console.log(categoryData)

    return (
        <React.Fragment>
            <div className="banner" id={id}>
                <div className="container">
                    <div className="title">
                        <h2>{categoryName}</h2>
                        {
                            categoryQuote !== undefined && (
                                <p>
                                    <span className="fav-quote">"{categoryQuote.quote}"</span>
                                    <span>-&nbsp;&nbsp;{categoryQuote.from}</span>
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <Link className="back-to-home" to="/" >
                    <i className="lni lni-arrow-left"></i>&nbsp;&nbsp;Back to Home
                </Link>
                <ul className="category-list">
                    {
                        (categoryData !== null) && (
                            categoryData.map(data => (
                                <li className="list-item" key={data.sys.id}>
                                    <Layout data={data} />
                                </li>
                            ))
                        )
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
