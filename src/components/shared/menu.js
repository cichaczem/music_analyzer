import React from 'react';
import { Link } from 'react-router'

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/analyzer">Analyzer</Link></li>
      </ul>
    )
  }
};

export default Menu;
