import { render } from '@redwoodjs/testing/web'

import RefineLayout from './RefineLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RefineLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RefineLayout />)
    }).not.toThrow()
  })
})
