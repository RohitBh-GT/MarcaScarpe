import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,
    document.getElementById('root'));