import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import Time from './Time.jsx'
import './index.css';

function Main(){
    return(
        <>
        <Time/>
        </>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>,
    document.getElementById('root')
);