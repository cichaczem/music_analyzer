import expect from 'expect'

import countOccurences from '../../src/lib/artist_occurences_counter'

describe('Artist Occurence Counter', () => {
  const artists = ["A", "B", "C"]
  const tracks = [
    {artist: {name: "A"}},
    {artist: {name: "B"}},
    {artist: {name: "A"}},
    {artist: {name: "C"}},
    {artist: {name: "A"}},
    {artist: {name: "C"}}
  ]

  const occurences = countOccurences(tracks)

  artists.map(artist => {
    it("artist " + artist + " should be returned just once",() => {
      const a = occurences.filter(occ => occ.artist === artist)
      expect(a.length).toEqual(1)
    })
  })

  it('artist A should occure 3 times',() => {
    const A = occurences.filter(occ => occ.artist === "A")[0]
    expect(A.occured).toEqual(3)
  })

  it('artist B should occure 1 times',() => {
    const B = occurences.filter(occ => occ.artist === "B")[0]
    expect(B.occured).toEqual(1)
  })

  it('artist C should occure 2 times',() => {
    const C = occurences.filter(occ => occ.artist === "C")[0]
    expect(C.occured).toEqual(2)
  })

  it('if no tracks were passed empty array should be returned',() => {
    const occurences = countOccurences([])
    expect(occurences).toEqual([])
  })

  it('there should be only 10 artists returned',() => {
    const tracks = [
      {artist: {name: "A"}},
      {artist: {name: "B"}},
      {artist: {name: "C"}},
      {artist: {name: "D"}},
      {artist: {name: "E"}},
      {artist: {name: "F"}},
      {artist: {name: "G"}},
      {artist: {name: "H"}},
      {artist: {name: "I"}},
      {artist: {name: "J"}},
      {artist: {name: "K"}},
      {artist: {name: "L"}},
      {artist: {name: "M"}}
    ]
    const occurences = countOccurences(tracks)
    expect(occurences.length).toEqual(10)
  })
})
