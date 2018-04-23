import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './components/app/index';
import registerServiceWorker from './registerServiceWorker';
import startChat from './chat';


startChat(store);






ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
 document.getElementById('root'));
registerServiceWorker();
