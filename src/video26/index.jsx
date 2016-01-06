import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducers } from './video26.js'

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

const AddTodo= ({}, {store}) => {
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

AddTodo.contextTypes= {
  store: React.PropTypes.object,
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
  static contextTypes= {
    store: React.PropTypes.object,
  }

  render() {
    const { filter, children }= this.props
    const { store }= this.context
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
    this.unsubscribe= this.context.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
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

class VisibleTodoList extends React.Component {
  static contextTypes= {
    store: React.PropTypes.object,
  }

  render() {
    const { store }= this.context
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
    this.unsubscribe= this.context.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
}

let nextTodoId= 0
const TodoApp= () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
)

export class Video26 extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <TodoApp/>
      </Provider>
    )
  }
}

export default Video26
