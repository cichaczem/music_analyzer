import React from 'react';
import { connect } from 'react-redux'

const Apples = (props) => { return <div>Apples</div> };

function mapStateToProps(state, ownProps) {
  return {
    page: "dsxddds"
  };
}

export default connect(mapStateToProps)(Apples);
