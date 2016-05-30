import expect from 'expect'

import {
  REQUEST_LOVED_TRACKS, RECEIVE_LOVED_TRACKS
} from '../../src/actions'
import tracksReducer from '../../src/reducers'

describe('Tracks reducer', () => {
  const track = {artist: "A"}
  it("should return initial state",() => {
    expect(
      tracksReducer(undefined, {})
    ).toEqual(
      {
        isFetching: false,
        items: []
      }
    )
  })

  it("isFetching should be true if received REQUEST_LOVED_TRACKS",() => {
    expect(
      tracksReducer(undefined, {
        type: REQUEST_LOVED_TRACKS
      }).isFetching
    ).toEqual(true)
  })

  it("track list should be empty if received REQUEST_LOVED_TRACKS",() => {
    expect(
      tracksReducer(undefined, {
        type: REQUEST_LOVED_TRACKS
      }).items
    ).toEqual([])
  })

  it("isFetching should be false if received RECEIVE_LOVED_TRACKS",() => {
    expect(
      tracksReducer(undefined, {
        type: RECEIVE_LOVED_TRACKS,
        tracks: [track]
      }).isFetching
    ).toEqual(false)
  })

  it("tracks list should be equal to passed tracks with RECEIVE_LOVED_TRACKS",() => {
    const items = tracksReducer(undefined, {
        type: RECEIVE_LOVED_TRACKS,
        tracks: [track]
      }).items
    expect(items).toInclude(track)
  })
})
