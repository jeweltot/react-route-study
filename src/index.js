import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import RouteIndex from './routeIndex';
import reducers from './reducers';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <RouteIndex/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
