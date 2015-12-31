import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { toggleTodo } from './video10.js'

describe('vidoe10 tests', () => {
  it('toggles todo', () => {
    const todoBefore= {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    }

    const todoAfter= {
      id: 0,
      text: 'Learn Redux',
      completed: true,
    }

    deepFreeze(todoBefore)

    expect(toggleTodo(todoBefore)).to.eql(todoAfter)
  })
})
