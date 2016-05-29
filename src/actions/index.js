import API from '../lib/api'
import handleValidator from '../lib/last_fm_handle_validator'

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

export function fetchLovedTracks(lastFmHandle, onError) {
  return dispatch => {
    if(handleValidator.isValid(lastFmHandle)) {
      dispatch(requestLovedTracks())
      return API.getLovedTracksForUser(lastFmHandle)
        .then(json => dispatch(receiveLovedTracks(json)))
    } else {
      onError("Invalid handle")
    }
  }
}
