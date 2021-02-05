import React, { useEffect, useState } from 'react'
import { client } from '../Client'
import Category from '../components/Category'
import Jumbotron from '../components/Jumbotron'
import QuickView from '../components/QuickView'


export default function Landing({sideMenuFn, sideMenu}) {
    
    const [books, setBooks] = useState([])
    const [movies, setMovies] = useState([])
    const [tvSeries, setTvSeries] = useState([])
    const [podcasts, setPodcasts] = useState([])
    const [quickViewData, setQuickViewData] = useState();

    const getDataEntries = (contentType, category, setData) => {
        client.getEntries({content_type: contentType})
        .then(res => localStorage.setItem(category, JSON.stringify(res.items)))
        .then(() => setData(JSON.parse(localStorage.getItem(category))))
        .catch(err => console.log(err));
    }
    
    useEffect(() => {

        getDataEntries('books', 'books', setBooks)
        getDataEntries('movies', 'movies', setMovies)
        getDataEntries('tvSeries', 'tvSeries', setTvSeries)
        getDataEntries('podcasts', 'podcasts', setPodcasts)

    }, [])

    const getLSData = (categoryName) => {
        return JSON.parse(localStorage.getItem(categoryName));
    }

    const quickViewHandler = (e) => {
        if(e.target.classList.contains('card')) {
            let dataId = e.target.dataset.id;
            let categoryId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
            let lsData = getLSData(categoryId);

            lsData.forEach(data => {
                let id = data.sys.id;
                if(dataId === id) {
                    setQuickViewData(data);
                }

                // checking if quick view is present in the DOM, if not available (null), we do nothing, if available, we display:flex it.
                
                let quickViewUI = document.querySelector('.quick-view');
                if(!(quickViewUI === null)) {
                    quickViewUI.style.display = 'flex';
                }
            })
        }
    }

    return (
        <React.Fragment>
            <Jumbotron />

            <Category categoryId="books" categoryName="books" categoryLink="/books" categoryData={books} quickViewFn={quickViewHandler} />
            <Category categoryId="movies" categoryName="movies" categoryLink="/movies" categoryData={movies} quickViewFn={quickViewHandler} />
            <Category categoryId="tvSeries" categoryName="tvSeries" categoryLink="/tvSeries" categoryData={tvSeries} quickViewFn={quickViewHandler} />
            <Category categoryId="podcasts" categoryName="podcasts" categoryLink="/podcasts" categoryData={podcasts} quickViewFn={quickViewHandler} />

            {
                !(quickViewData === undefined) && <QuickView data={quickViewData} />
            }
        </React.Fragment>
    )
}
