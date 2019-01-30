import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import authReducer from './Store/reducers/authReducer';
import searchReducer from './Store/reducers/searchReducer';
import * as serviceWorker from './serviceWorker';

const rootReducer= combineReducers({
    auth:authReducer,
    sp:searchReducer
})

const store = createStore(rootReducer,
compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

const app= (
    <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
