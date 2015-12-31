import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'
import Video6 from './video6'
import Video7 from './video7'
import Video8 from './video8'

render((
  <Router>
    <Route path='/' component={Main}>
      <IndexRedirect to='v6'/>
      <Route path='v6' component={Video6} />
      <Route path='v7' component={Video7} />
      <Route path='v8' component={Video8} />
    </Route>
  </Router>
), document.getElementById('app'))
