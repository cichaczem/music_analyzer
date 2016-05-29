import {
  REQUEST_LOVED_TRACKS, RECEIVE_LOVED_TRACKS
} from '../actions'

const tracks = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_LOVED_TRACKS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_LOVED_TRACKS:
      return {
        isFetching: false,
        items: action.tracks
      }
    default:
      return state
  }
}

export default tracks
