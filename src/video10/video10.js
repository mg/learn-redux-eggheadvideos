const toggleTodo= todo => {
  return {
    ...todo,
    completed: !todo.completed,
  }
}

export { toggleTodo }
