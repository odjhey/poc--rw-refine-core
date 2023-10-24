import { render } from '@redwoodjs/testing/web'

import SampolsPage from './SampolsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SampolsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SampolsPage />)
    }).not.toThrow()
  })
})
