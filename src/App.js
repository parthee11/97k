import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './pages/Landing'
import './css/style.scss'
import Header from './components/Header';
import SideNav from './components/SideNav';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import { client } from './Client';

export default function App() {

    const [quotes, setQuotes] = useState();
    const [books, setBooks] = useState([])
    const [movies, setMovies] = useState([])
    const [tvSeries, setTvSeries] = useState([])
    const [podcasts, setPodcasts] = useState([])
    const [quickViewData, setQuickViewData] = useState();

    const getDataEntries = (contentType, category, setData) => {
        client.getEntries({content_type: contentType})
        .then(res => localStorage.setItem(category, JSON.stringify(res.items)))
        .then(() => setData(JSON.parse(localStorage.getItem(category))))
        .catch(err => err);
    }

    useEffect(() => {

        client.getEntries({
            content_type: "quotes"
        })
            .then(res => (
                localStorage.setItem('quotes', JSON.stringify(res.items[0].fields.quotes))
            ))
            .then(() => (
                setQuotes(JSON.parse(localStorage.getItem('quotes')))
            ))
            .catch(err => err)

        
        getDataEntries('books', 'books', setBooks)
        getDataEntries('movies', 'movies', setMovies)
        getDataEntries('tvSeries', 'tvSeries', setTvSeries)
        getDataEntries('podcasts', 'podcasts', setPodcasts)    

    }, [])

    let bookQ;
    let movieQ;
    let tvQ;
    let podcastQ;

    if(quotes !== undefined) {
        bookQ = quotes.book;
        movieQ = quotes.movie;
        tvQ = quotes.tvSeries;
        podcastQ = quotes.podcast;
    }

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

    const sideMenuRef = useRef();

    const sideMenuHandler = (e) => {
        let targetChild = e.target.children[0];

        if(targetChild.classList.contains('lni-menu')) {
            targetChild.classList.remove('lni-menu');
            targetChild.classList.add('lni-close');
        } else {
            targetChild.classList.add('lni-menu');
            targetChild.classList.remove('lni-close');
        };

        sideMenuRef.current.classList.toggle('toggle-menu');
        
        sideMenuRef.current.classList.contains('toggle-menu') ? 
        document.body.style.overflowY = 'hidden' :
        document.body.style.overflowY = 'scroll';
    }
    
    return (
        <React.Fragment>
            <Router>
                <Header sideMenuFn={sideMenuHandler}/>
                <Switch>
                    <Route path='/books' >
                        <CategoryPage id="banner-book" categoryName="books" categoryData={books} categoryQuote={bookQ} />
                    </Route>
                    <Route path='/movies' >
                        <CategoryPage id="banner-movie" categoryName="movies" categoryData={movies} categoryQuote={movieQ} />
                    </Route>
                    <Route path='/tvSeries' >
                        <CategoryPage id="banner-tv" categoryName="tv Series" categoryData={tvSeries} categoryQuote={tvQ} />
                    </Route>
                    <Route path='/podcasts' >
                        <CategoryPage id="banner-podcast" categoryName="podcasts" categoryData={podcasts} categoryQuote={podcastQ} />
                    </Route>
                    <Route exact path='/'>
                        <Landing booksData={books} moviesData={movies} tvSeriesData={tvSeries} podcastsData={podcasts} qViewData={quickViewData} quickViewFn={quickViewHandler} />
                    </Route>
                </Switch>
                <SideNav sideMenu={sideMenuRef}/>
                <Footer />
            </Router>
        </React.Fragment>
    )
}
