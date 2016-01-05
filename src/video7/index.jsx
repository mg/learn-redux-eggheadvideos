import React from 'react'
import { store } from './video7.js'

export default class Video7 extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => store.dispatch({type: 'INCREMENT'})}>+</button>
        <button onClick={() => store.dispatch({type: 'DECREMENT'})}>-</button>
      </div>
    )
  }

  componentDidMount() {
    const render= () => this.setState({counter: store.getState()})
    store.subscribe(render)
    render()
  }

  state= {}
}
