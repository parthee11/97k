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
    }, [])

    const setCategoryDataHandler = (lsKey) => {
        return JSON.parse(localStorage.getItem(lsKey))
    }

    const books = setCategoryDataHandler('books');
    const movies = setCategoryDataHandler('movies');
    const tvSeries = setCategoryDataHandler('tvSeries');
    const podcasts = setCategoryDataHandler('podcasts');

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
                    <Route exact path='/' component={Landing} ></Route>
                </Switch>
                <SideNav sideMenu={sideMenuRef}/>
                <Footer />
            </Router>
        </React.Fragment>
    )
}
