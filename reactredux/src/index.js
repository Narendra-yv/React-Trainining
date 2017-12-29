import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async';
import logger from 'redux-logger'
{/* <Provider store={createStoreWithMiddleware(reducers)}> */}
{/* <Provider store={createStore(reducers)}> */}
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
