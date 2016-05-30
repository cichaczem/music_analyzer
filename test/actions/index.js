import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchLovedTracks, REQUEST_LOVED_TRACKS, RECEIVE_LOVED_TRACKS } from '../../src/actions'
import config from '../../src/config'
import nock from 'nock'
import expect from 'expect'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Action creator', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates REQUEST_LOVED_TRACKS when fetching tracks has been finished', () => {
    const lastFmHandle = "rj"
    const url = "/?method=user.getlovedtracks&limit=" + config.lastFm.tracksLimit + "&api_key=" + config.lastFm.apiKey + "&format=json&user=" + lastFmHandle

    const tracks = [{artist: "A"}]

    nock(config.lastFm.apiUrl)
      .get(url)
      .reply(200, { lovedtracks: { track:  tracks} })

    const expectedActions = [
      { type: REQUEST_LOVED_TRACKS },
      { type: RECEIVE_LOVED_TRACKS, tracks: tracks }
    ]
    const store = mockStore({ isFetching: false, items: [] })

    return store.dispatch(fetchLovedTracks(lastFmHandle, (error) => error))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
