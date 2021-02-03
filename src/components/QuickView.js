import React, { useRef } from 'react'
import Layout from './Layout'

export default function QuickView(props) {

    const qvRef = useRef();

    const closeQuickViewHanlder = (e) => {
        if(e.target.classList.contains('quick-view')) {
            qvRef.current.style.display = 'none';
        }
    }

    return (
        <div className="quick-view" ref={qvRef} onClick={closeQuickViewHanlder}>
            <div className="quick-view-content">
                <Layout data={props.data}/>
            </div>
        </div>
    )
}
