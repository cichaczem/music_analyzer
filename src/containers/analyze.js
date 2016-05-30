import React, { PropTypes } from 'react'
import Menu from '../components/shared/menu'
import Chart from '../components/chart'
import Form from '../components/form'
import Loader from '../components/shared/loader'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { fetchLovedTracks } from '../actions'
import countArtistOccurences from '../lib/artist_occurences_counter'

function mapStateToProps(state) {
  const artists = countArtistOccurences(state.tracks.items)
  return {
    tracks: artists,
    isFetching: state.tracks.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchLovedTracks: bindActionCreators(fetchLovedTracks, dispatch) };
}

class Analyze extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = props.fetchLovedTracks.bind(this)
  }

  renderLoader() {
    if(this.props.isFetching)
      return <Loader />
  }

  render() {
    const { tracks } = this.props
    return (
      <div>
        {this.renderLoader()}
        <Form onSubmit={this.handleSubmit} />
        <Chart data={tracks} />
      </div>
    )
  }
}

Analyze.propTypes = {
  tracks: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchLovedTracks: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Analyze)
