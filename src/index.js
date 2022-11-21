import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import './App.scss';
// import store from "./SpyGame/Redux/Store/Store.jsx";
// import { Provider } from 'react-redux';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <Provider store={store}> */}
                <App />
            {/* </Provider> */}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);