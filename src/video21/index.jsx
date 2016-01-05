import React from 'react'
import { store } from './video21.js'

const FilterLink= ({filter, currentFilter, onClick, children}) => {
  if(filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a href='#'
       onClick={e => {
         e.preventDefault()
         onClick(filter)
       }}
    >
      {children}
    </a>
  )
}

const Todo= ({completed, text, onClick}) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}>
    {text}
  </li>
)

const TodoList= ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

const AddTodo= ({onClick}) => {
  let input

  return(
    <div>
      <input ref={node => { input= node }} />

      <button onClick={() => {
          onClick(input.value)
          input.value= ''
        }}>
        Add Todo
      </button>
    </div>
  )
}

const Footer= ({visibilityFilter, onClick}) => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter} onClick={onClick}>All</FilterLink>
    {' '}
    <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter} onClick={onClick}>Active</FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter} onClick={onClick}>Compoleted</FilterLink>
  </p>
)

const getVisibleTodos= (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

let nextTodoId= 0
const TodoApp= ({todos, visibilityFilter}) => (
  <div>
    <AddTodo
      onClick={text =>
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text,
        })
      }
      />
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      onTodoClick={id =>
        store.dispatch({
          type: 'TOGGLE_TODO',
          id,
        })
      }/>

    <Footer
      visibilityFilter={visibilityFilter}
      onClick={filter =>
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter,
        })
      }
      />
  </div>
)

export class Video21 extends React.Component {
  render() {
    return (
      <TodoApp {...store.getState()} />
    )
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }
}

export default Video21
