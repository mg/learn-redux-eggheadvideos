import React from 'react'
import { store } from './video22.js'

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

const Link= ({active, onClick, children}) => {
  if(active) {
    return <span>{children}</span>
  }
  return (
    <a href='#'
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

class FilterLink extends React.Component {
  componentDidMount() {
    this.unsubscribe= store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { filter, children }= this.props
    const { visibilityFilter }= store.getState()

    return (
      <Link
        active={filter === visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter,
          })
        }
        >
        {children}
      </Link>
    )
  }
}

const Footer= () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>All</FilterLink>
    {' '}
    <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED'>Compoleted</FilterLink>
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

    <Footer/>
  </div>
)

export class Video22 extends React.Component {
  render() {
    return (
      <TodoApp {...store.getState()} />
    )
  }

  componentDidMount() {
    this.unsubscribe= store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
}

export default Video22
