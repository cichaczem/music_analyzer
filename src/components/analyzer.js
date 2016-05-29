import React, { PropTypes } from 'react'

class Analyzer extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.length}
      </div>
    )
  }
}

Analyzer.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Analyzer;
