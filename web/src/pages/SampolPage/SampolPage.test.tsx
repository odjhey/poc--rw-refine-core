import { render } from '@redwoodjs/testing/web'

import SampolPage from './SampolPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SampolPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SampolPage />)
    }).not.toThrow()
  })
})
