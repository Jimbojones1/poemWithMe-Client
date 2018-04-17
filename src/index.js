import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './state/store';
import './index.css';
import App from './app;
import registerServiceWorker from './registerServiceWorker';

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
