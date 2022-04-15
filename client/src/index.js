import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

// Store enhancers let us customize the store when it's created
// Enhancers wrap the store and can override its methods
// createStore accepts one enhancer as an argument
// Multiple enhancers can be merged together using the compose API

const store = createStore(reducers, compose(applyMiddleware(thunk)));

import App from './App'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'))