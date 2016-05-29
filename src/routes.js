import React from 'react'
import { IndexRoute, Route } from 'react-router'

import Main from './layouts/main'
import Home from './containers/home'
import Analyse from './containers/analyse'

export default <Route path="/" component={Main}>
                 <Route path="analyzer" component={Analyse}/>
                 <IndexRoute component={Home}/>
               </Route>
