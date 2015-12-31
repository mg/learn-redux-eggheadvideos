import React from 'react'
import { store } from './video6.js'

export default class Video6 extends React.Component {
  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
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