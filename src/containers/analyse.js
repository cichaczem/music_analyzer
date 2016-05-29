import React from 'react'
import Menu from '../components/shared/menu'
import Analyzer from '../components/analyzer'
import Form from '../components/form'

import { connect } from 'react-redux'
import { fetchLovedTracks } from '../actions'

class Analyse extends React.Component {
  handleSubmit(lastFmHandle) {
    this.props.dispatch(fetchLovedTracks(lastFmHandle))
  }

  render() {
    const { tracks } = this.props
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}/>
        <Analyzer data={tracks} />
      </div>
    )
  }
}

function masStateToProps(state) {
  return {
    tracks: state.tracks.items
  }
}

export default connect(masStateToProps)(Analyse);
