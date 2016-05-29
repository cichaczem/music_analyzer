import React from 'react'

class Analyzer extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.length}
      </div>
    )
  }
}

export default Analyzer;
