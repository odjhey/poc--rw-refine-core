import { render } from '@redwoodjs/testing/web'

import NewSampol from './NewSampol'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewSampol', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewSampol />)
    }).not.toThrow()
  })
})
