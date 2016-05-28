import React from 'react'
import { Route } from 'react-router'

import Title from './layout/title';
import Apples from './components/apples';
import Bananas from './components/bananas';

export default <Route path="/" component={Title}>
                 <Route path="apples" component={Apples}/>
                 <Route path="bananas" component={Bananas}/>
               </Route>
