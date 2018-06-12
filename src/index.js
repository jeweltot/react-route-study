import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import RouteIndex from './routeIndex';
import reducers from './reducers';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(promise)
));

ReactDOM.render(
    <Provider store={store}>
        <RouteIndex/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
