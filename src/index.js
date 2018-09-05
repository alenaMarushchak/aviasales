import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducers from './reducers';

import "./scss/main.scss";

import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
