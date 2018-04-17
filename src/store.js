import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
// Redux thunk is middleware for Redux that allows you to
// write action creators that return a function instead of an action
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';
import { composeWithDevToools } from 'redux-devtools-extension';
