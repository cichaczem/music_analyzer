import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default createStore(
  combineReducers({
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware)
);
