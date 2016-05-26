import React from 'react';
import { render } from 'react-dom';

let appElement = document.getElementById('app');
let App = (props) => { return <div>React works!</div> };

render(<App/>, appElement);
