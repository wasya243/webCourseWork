import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import App from './containers/App';

import createStore from './store';
const store = createStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                header="I am the header"
                main="I am the main"
                footer="I am the footer"
            />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);