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
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}/>
        <Analyzer data={"data"} />
      </div>
    )
  }
}

function masStateToProps(state) {
  return {}
}

export default connect(masStateToProps)(Analyse);
