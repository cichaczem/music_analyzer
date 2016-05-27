import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Title from './layout/title';
import Apples from './components/apples';
import Bananas from './components/bananas';

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Title}>
        <Route path="foo" component={Apples}/>
        <Route path="bar" component={Bananas}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
