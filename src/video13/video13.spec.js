import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { todos } from './video13.js'

describe('vidoe13 tests', () => {
  it('add todo', () => {
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

  it('toggle todo', () => {
    const stateBefore= [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false,
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: false,
      }
    ]

    const action= {
      type: 'TOGGLE_TODO',
      id: 1,
    }

    const stateAfter= [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false,
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: true,
      }
    ]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(todos(stateBefore, action)).to.eql(stateAfter)
  })
})
