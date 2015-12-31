import { expect } from 'chai'
import { counter } from './video5.js'

describe('vidoe5 tests', () => {
  it('increments', () => {
    expect(counter(0, { type: 'INCREMENT' })).to.equal(1)
    expect(counter(1, { type: 'INCREMENT' })).to.equal(2)
  })

  it('decrements', () => {
    expect(counter(2, { type: 'DECREMENT' })).to.equal(1)
    expect(counter(1, { type: 'DECREMENT' })).to.equal(0)
  })

  it('ignores unknown actions', () => {
    expect(counter(1, { type: 'SOMETHING_ELSE' })).to.equal(1)
  })

  it('specifies initial state', () => {
    expect(counter(undefined, { })).to.equal(0)
  })

})
