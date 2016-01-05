import React from 'react'
import { store } from './video18.js'

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
            <li key={todo.id}
                onClick={() => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id,
                  })
                }}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'  
                }}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export class Video18 extends React.Component {
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

export default Video18
