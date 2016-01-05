import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'
import Video6 from './video6'
import Video7 from './video7'
import Video8 from './video8'
import Video17 from './video17'
import Video18 from './video18'
import Video19 from './video19'
import Video20 from './video20'
import Video21 from './video21'

render((
  <Router>
    <Route path='/' component={Main}>
      <IndexRedirect to='v6'/>
      <Route path='v6' component={Video6} />
      <Route path='v7' component={Video7} />
      <Route path='v8' component={Video8} />
      <Route path='v17' component={Video17} />
      <Route path='v18' component={Video18} />
      <Route path='v19' component={Video19} />
      <Route path='v20' component={Video20} />
      <Route path='v21' component={Video21} />
    </Route>
  </Router>
), document.getElementById('app'))
