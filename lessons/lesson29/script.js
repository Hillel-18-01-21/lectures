import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import App from './App.jsx';
import './src/styles/main.css';
import store from './src/core/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);