import React from 'react';
import { connect } from 'react-redux'

const Bananas = (props) => { return <div>Bananas</div> };

function mapStateToProps(state, ownProps) {
  return {
    page: "dsds"
  };
}

export default connect(mapStateToProps)(Bananas);
