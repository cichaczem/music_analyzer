import React from 'react'
import Menu from '../components/shared/menu'

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Menu />
          <div className="starter-template">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
