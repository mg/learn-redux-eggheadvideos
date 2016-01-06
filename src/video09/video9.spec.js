import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { addCounter, removeCounter, incrementCounter } from './video9.js'

describe('vidoe9 tests', () => {
  it('adds counter', () => {
    const listBefore= []
    const listAfter= [0]

    deepFreeze(listBefore)

    expect(addCounter(listBefore)).to.eql(listAfter)
  })

  it('removes counter', () => {
    const listBefore= [0, 10, 20]
    const listAfter= [0, 20]

    deepFreeze(listBefore)

    expect(removeCounter(listBefore, 1)).to.eql(listAfter)
  })

  it('increments counter', () => {
    const listBefore= [0, 10, 20]
    const listAfter= [0, 11, 20]

    deepFreeze(listBefore)

    expect(incrementCounter(listBefore, 1)).to.eql(listAfter)
  })

})
