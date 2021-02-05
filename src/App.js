import React, { useRef } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './pages/Landing'
import './css/style.scss'
import Header from './components/Header';
import SideNav from './components/SideNav';
import CategoryPage from './pages/CategoryPage';

export default function App() {

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
    
    return (
        <React.Fragment>
            <Router>
                <Header sideMenuFn={sideMenuHandler}/>
                <Switch>
                    <Route path='/books' >
                        <CategoryPage id="banner-book" categoryName="books" categoryData={books} />
                    </Route>
                    <Route path='/movies' >
                        <CategoryPage id="banner-movie" categoryName="movies" categoryData={movies} />
                    </Route>
                    <Route path='/tvSeries' >
                        <CategoryPage id="banner-tv" categoryName="tv Series" categoryData={tvSeries} />
                    </Route>
                    <Route path='/podcasts' >
                        <CategoryPage id="banner-podcast" categoryName="podcasts" categoryData={podcasts} />
                    </Route>
                    <Route exact path='/' component={Landing} ></Route>
                </Switch>
                <SideNav sideMenu={sideMenuRef}/>
            </Router>
        </React.Fragment>
    )
}
