import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function CategoryPage({ id, categoryName, categoryData }) {
    
    return (
        <React.Fragment>
            <div className="banner" id={id}>
                <div className="container">
                    <div className="title">
                        <h2>{categoryName}</h2>
                        <p>( Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum velit deleniti nostrum iure tempore sint blanditiis error, inventore sapiente! )</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <Link className="back-to-home" to="/" >
                    <i className="lni lni-arrow-left"></i>&nbsp;&nbsp;Back to Home
                </Link>
                <ul className="category-list">
                    {
                        categoryData.map(data => (
                            <li className="list-item" key={data.sys.id}>
                                <Layout data={data} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
