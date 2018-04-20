import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
// Redux thunk is middleware for Redux that allows you to
// write action creators that return a function instead of an action
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import {chatMiddleWare} from './chat';
// import { composeWithDevToools } from 'redux-devtools-extension';

export const history = createHistory();

const initialState = {
  username: 'jim',
  messages: []
};
const enhancers = [];

const rootReducer = reducers;

const middleware = [
  thunk,
  chatMiddleWare,
  routerMiddleware(history)
];


if(process.env.NODE_ENV === 'development'){

    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

};


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store;

