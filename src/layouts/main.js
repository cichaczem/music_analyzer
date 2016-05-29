import React from 'react'
import Menu from '../components/shared/menu'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    )
  }
}

export default Main;
