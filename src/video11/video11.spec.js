import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { todos } from './video11.js'

describe('vidoe11 tests', () => {
  it('todos', () => {
    const stateBefore= []
    const action= {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux',
    }
    const stateAfter= [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false,
      }
    ]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(todos(stateBefore, action)).to.eql(stateAfter)
  })
})
