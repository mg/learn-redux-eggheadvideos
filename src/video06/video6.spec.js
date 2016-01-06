import { expect } from 'chai'
import { store } from './video6.js'

describe('vidoe6 tests', () => {
  it('increments', () => {
    store.dispatch({ type: 'INCREMENT' })
    expect(store.getState()).to.equal(1)
    store.dispatch({ type: 'INCREMENT' })
    expect(store.getState()).to.equal(2)
  })

  it('decrements', () => {
    store.dispatch({ type: 'DECREMENT' })
    expect(store.getState()).to.equal(1)
    store.dispatch({ type: 'DECREMENT' })
    expect(store.getState()).to.equal(0)
  })

  it('ignores unknown actions', () => {
    store.dispatch({ type: 'SOMETHING_ELSE' })
    expect(store.getState()).to.equal(0)
  })
})
