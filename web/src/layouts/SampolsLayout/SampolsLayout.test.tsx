import { render } from '@redwoodjs/testing/web'

import SampolsLayout from './SampolsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SampolsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SampolsLayout />)
    }).not.toThrow()
  })
})
