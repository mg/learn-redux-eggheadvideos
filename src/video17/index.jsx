import React from 'react'
import { store } from './video17.js'

let nextTodoId= 0

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <input ref={node => { this.input= node }} />

        <button onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++,
            })
            this.input.value= ''
          }}>
          Add Todo
        </button>

        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export class Video17 extends React.Component {
  render() {
    return (
      <TodoApp
        todos={store.getState().todos}
        />
    )
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }
}

export default Video17
