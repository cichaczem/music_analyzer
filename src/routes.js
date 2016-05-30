import React from 'react'
import { IndexRoute, Route } from 'react-router'

import Main from './layouts/main'
import Home from './containers/home'
import Analyze from './containers/analyze'

export default <Route path="/" component={Main}>
                 <Route path="analyzer" component={Analyze}/>
                 <IndexRoute component={Home}/>
               </Route>
