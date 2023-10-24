import { render } from '@redwoodjs/testing/web'

import Sampols from './Sampols'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Sampols', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sampols />)
    }).not.toThrow()
  })
})
