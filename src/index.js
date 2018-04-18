import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import './index.css';
import App from './components/app/index';
import registerServiceWorker from './registerServiceWorker';
import startChat from './chat';


startChat(store);


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
