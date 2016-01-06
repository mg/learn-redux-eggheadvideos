import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { reducers, addTodo, toggleTodo, setVisibilityFilter } from './video30.js'

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

const mapStateToTodoListProps= (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToTodoListProps= (dispatch) => {
  return {
    onTodoClick: id =>
      dispatch(toggleTodo(id))
  }
}

const VisibleTodoList= connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps,
)(TodoList)

let AddTodo= ({dispatch}) => {
  let input

  return(
    <div>
      <input ref={node => { input= node }} />

      <button onClick={() => {
          dispatch(addTodo(input.value))
          input.value= ''
        }}>
        Add Todo
      </button>
    </div>
  )
}
AddTodo= connect()(AddTodo) // do not subscribe to store, do not recieve any props from state, only recieve dispatch function as a prop

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

const mapStateToLinkProps= (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToLinkProps= (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink= connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link)

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

const TodoApp= () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
)

export class Video30 extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <TodoApp/>
      </Provider>
    )
  }
}

export default Video30
