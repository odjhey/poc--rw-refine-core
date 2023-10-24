import { render } from '@redwoodjs/testing/web'

import NewSampolPage from './NewSampolPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewSampolPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewSampolPage />)
    }).not.toThrow()
  })
})
