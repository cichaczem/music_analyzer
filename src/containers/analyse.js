import React from 'react'
import Menu from '../components/shared/menu'
import Analyzer from '../components/analyzer'
import Form from '../components/form'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { fetchLovedTracks } from '../actions'

function mapStateToProps(state) {
  return { tracks: state.tracks.items }
}

function mapDispatchToProps(dispatch) {
  return { fetchLovedTracks: bindActionCreators(fetchLovedTracks, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Analyse extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = props.fetchLovedTracks.bind(this)
  }

  render() {
    const { tracks } = this.props
    return (
      <div>
        <Form onSubmit={this.handleSubmit}/>
        <Analyzer data={tracks} />
      </div>
    )
  }
}
