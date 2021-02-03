import React, { useEffect, useRef, useState } from 'react'
import { client } from '../Client'
import Category from '../components/Category'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import QuickView from '../components/QuickView'
import SideNav from '../components/SideNav'


export default function Landing() {
    
    const [books, setBooks] = useState([])
    const [quickViewData, setQuickViewData] = useState();
    const sideMenuRef = useRef();
    
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

    const sideMenuHandler = (e) => {
        let targetChild = e.target.children[0];

        if(targetChild.classList.contains('lni-menu')) {
            targetChild.classList.remove('lni-menu');
            targetChild.classList.add('lni-close');
        } else {
            targetChild.classList.add('lni-menu');
            targetChild.classList.add('lni-close');
        };

        sideMenuRef.current.classList.toggle('toggle-menu');
        
        sideMenuRef.current.classList.contains('toggle-menu') ? 
        document.body.style.overflowY = 'hidden' :
        document.body.style.overflowY = 'scroll';
    }

    return (
        <React.Fragment>
            <Header sideMenuFn={sideMenuHandler} />
            <Jumbotron />
            <Category categoryId="books" categoryName="books" categoryLink="/books" categoryData={books} quickViewFn={quickViewHandler} />
            {
                !(quickViewData === undefined) && <QuickView data={quickViewData} />
            }
            <SideNav sideMenu={sideMenuRef} />
        </React.Fragment>
    )
}
