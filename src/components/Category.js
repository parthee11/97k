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
        const id = data.sys.id;
        const imageSrc = data.fields.image.fields.file.url;
        const title = data.fields.title;
        const rating = data.fields.rating;
        const ratingBy = data.fields.ratingBy;
        return (
            {
                id, imageSrc, title, rating, ratingBy
            }
        );
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
                                    <Card id={data.id} image={data.imageSrc} altImage={data.title} title={data.title} rating={data.rating} rateBy={data.ratingBy}  />
                                </SwiperSlide>
                            ))
                        }                        
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
