import React from 'react'
import { store } from './video8.js'

const Counter= ({value, onIncrement, onDecrement}) =>
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>

export default class Video8 extends React.Component {
  render() {
    return (
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />
    )
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }
}

export default Video8
