import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppConfig} from "./types";
import {BrowserRouter, HashRouter} from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        {
            AppConfig.publishMode
                ? (
                    <HashRouter>
                            <App />
                    </HashRouter>
                )
                : (
                    <BrowserRouter>
                            <App />
                    </BrowserRouter>
                )
        }
    </React.StrictMode>,
    document.getElementById('root')
);

