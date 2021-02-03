import React, { useEffect, useState } from 'react'
import { client } from '../Client'
import Category from '../components/Category'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import QuickView from '../components/QuickView'


export default function Landing() {
    
    const [books, setBooks] = useState([])
    const [quickViewData, setQuickViewData] = useState();
    
    useEffect(() => {
        client.getEntries({
            content_type: 'books97k'
        })
            .then(res => localStorage.setItem('books', JSON.stringify(res.items)))
            .then(() => setBooks(JSON.parse(localStorage.getItem('books'))))
            .catch(err => console.log(err));
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
            <Header />
            <Jumbotron />
            <Category categoryId="books" categoryName="books" categoryLink="/books" categoryData={books} quickViewFn={quickViewHandler} />
            {
                !(quickViewData === undefined) && <QuickView data={quickViewData} />
            }
        </React.Fragment>
    )
}
