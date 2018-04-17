import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './state/store';
import './index.css';
import App from './app/index';
import registerServiceWorker from './registerServiceWorker';
import io from 'socket.io-client';

export const socket = io.connect('http://localhost:4000');


console.log(history)



ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
 document.getElementById('root'));
registerServiceWorker();
