import fetch from 'isomorphic-fetch'
import config from '../config'

export default {
  getLovedTracksForUser(lastFmHandle) {
    const { apiUrl, tracksLimit, apiKey } = config.lastFm
    const url = apiUrl + "?method=user.getlovedtracks" + "&limit=" + tracksLimit +"&api_key=" + apiKey + "&format=json&user=" + lastFmHandle
    return fetch(url).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server")
        }
        return response.json()
    })
  }
}
