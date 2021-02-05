import React from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from './Card'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination])

export default function Category(props) {

    const categoryData = props.categoryData.map(data => {
        const id = data.sys.id
        const title = data.fields.title;
        const details = data.fields.details;
        const description = data.fields.description;
        const available = data.fields.available;
        const image = data.fields.image.fields.file.url;
        const imageAlt = data.fields.image.fields.title;
        let trailer;
        let rating;
        if(data.fields.trailer) {
            trailer = data.fields.trailer;
        }
        if(data.fields.ratingValue) {
            rating = [data.fields.ratingValue, data.fields.ratingBy];
        }
        return {
            id, title, details, description, available, image, imageAlt, trailer, rating
        }
    });

    return (
        <div className="category" id={props.categoryId}>
            <div className="container">
                <div className="title-section">
                    <h2>{props.categoryName}</h2>
                    <div className="separator"></div>
                    <Link to={props.categoryLink} className="all-link">View All</Link>
                </div>
                <div className="card-section" onClick={props.quickViewFn}>
                    <Swiper spaceBetween={72} slidesPerView={5} navigation pagination={{clickable: true}} breakpoints={{
                        1300: {
                            slidesPerView: 5
                        },
                        1050: {
                            slidesPerView: 4
                        },
                        850: {
                            slidesPerView: 3
                        },
                        768 : {
                            slidesPerView: 3
                        },
                        730 : {
                            slidesPerView: 3,
                        },
                        600: {
                            slidesPerView: 2
                        },
                        500: {
                            slidesPerView: 2
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }} >
                        {
                            categoryData.map(data => (
                                <SwiperSlide key={data.id}>
                                    <Card content={data} />
                                </SwiperSlide>
                            ))
                        }                        
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
