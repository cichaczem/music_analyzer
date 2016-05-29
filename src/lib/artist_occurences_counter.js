export default (data) => {
  const newData = data.reduce(
    (n, t) => {
      const name = t.artist.name
      n.hasOwnProperty(name) ? n[name] += 1 : n[name] = 1;
      return n;
    }, {})

  return Object.keys(newData).map((artist) => {
    return {artist: artist, occured: newData[artist]}
  }).sort( (a, b) => {
    return b.occured - a.occured
  }).slice(0, 10)
}
