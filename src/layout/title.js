import React from 'react';
import { Link } from 'react-router'

const Title = (props) => { return <div>React <Link to="/apples">Apples</Link> <Link to="/bananas">Bananas</Link>{props.children}</div> };

export default Title;
