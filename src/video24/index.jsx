import React from 'react'
import { createStore } from 'redux'
import { reducers } from './video24.js'

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

const AddTodo= ({store}) => {
  let input

  return(
    <div>
      <input ref={node => { input= node }} />

      <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value,
          })
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
  render() {
    const { store, filter, children }= this.props
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

  componentDidMount() {
    this.unsubscribe= this.props.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
}

const Footer= ({store}) => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL' store={store}>All</FilterLink>
    {' '}
    <FilterLink filter='SHOW_ACTIVE' store={store}>Active</FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED' store={store}>Compoleted</FilterLink>
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

class VisibleTodoList extends React.Component {
  render() {
    const { store }= this.props
    const { todos, visibilityFilter }= store.getState()

    return (
      <TodoList
        todos={getVisibleTodos(todos, visibilityFilter)}
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id,
          })
        }
        />
    )
  }

  componentDidMount() {
    this.unsubscribe= this.props.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
}

let nextTodoId= 0
const TodoApp= ({store}) => (
  <div>
    <AddTodo store={store}/>
    <VisibleTodoList store={store}/>
    <Footer store={store}/>
  </div>
)

export class Video24 extends React.Component {
  render() {
    return (
      <TodoApp store={createStore(reducers)}/>
    )
  }
}

export default Video24
