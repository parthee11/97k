import React from 'react'
import Category from '../components/Category'
import Jumbotron from '../components/Jumbotron'
import QuickView from '../components/QuickView'


export default function Landing({ booksData, moviesData, tvSeriesData, podcastsData, quickViewFn, qViewData }) {

    return (
        <React.Fragment>
            <Jumbotron />
            <Category categoryId="books" categoryName="books" categoryLink="/books" categoryData={booksData} quickViewFn={quickViewFn} />
            <Category categoryId="movies" categoryName="movies" categoryLink="/movies" categoryData={moviesData} quickViewFn={quickViewFn} />
            <Category categoryId="tvSeries" categoryName="tvSeries" categoryLink="/tvSeries" categoryData={tvSeriesData} quickViewFn={quickViewFn} />
            <Category categoryId="podcasts" categoryName="podcasts" categoryLink="/podcasts" categoryData={podcastsData} quickViewFn={quickViewFn} />
            {
                !(qViewData === undefined) && <QuickView data={qViewData} />
            }
        </React.Fragment>
    )
}
