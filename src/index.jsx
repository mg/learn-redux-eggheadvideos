import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'
import Video6 from './video06'
import Video7 from './video07'
import Video8 from './video08'
import Video17 from './video17'
import Video18 from './video18'
import Video19 from './video19'
import Video20 from './video20'
import Video21 from './video21'
import Video22 from './video22'
import Video23 from './video23'
import Video24 from './video24'
import Video25 from './video25'
import Video26 from './video26'
import Video27 from './video27'
import Video28 from './video28'
import Video29 from './video29'
import Video30 from './video30'

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
      <Route path='v22' component={Video22} />
      <Route path='v23' component={Video23} />
      <Route path='v24' component={Video24} />
      <Route path='v25' component={Video25} />
      <Route path='v26' component={Video26} />
      <Route path='v27' component={Video27} />
      <Route path='v28' component={Video28} />
      <Route path='v29' component={Video29} />
      <Route path='v30' component={Video30} />
    </Route>
  </Router>
), document.getElementById('app'))
