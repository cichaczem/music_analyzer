import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import tracks from '../reducers'

export default createStore(
  combineReducers({
    tracks: tracks,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware)
);
