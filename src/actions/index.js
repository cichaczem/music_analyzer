import API from '../api'

export const REQUEST_LOVED_TRACKS = 'REQUEST_LOVED_TRACKS'
export const RECEIVE_LOVED_TRACKS = 'RECEIVE_LOVED_TRACKS'

const requestLovedTracks = () => {
  return {
    type: REQUEST_LOVED_TRACKS
  }
}

const receiveLovedTracks = (json) => {
  return {
    type: RECEIVE_LOVED_TRACKS,
    tracks: json.lovedtracks.track
  }
}

export function fetchLovedTracks(lastFmHandle) {
  return dispatch => {
    dispatch(requestLovedTracks())
    return API.getLovedTracksForUser(lastFmHandle)
      .then(json => dispatch(receiveLovedTracks(json)))
  }
}
