// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import NewSampol from './NewSampol'

const meta: Meta<typeof NewSampol> = {
  component: NewSampol,
}

export default meta

type Story = StoryObj<typeof NewSampol>

export const Primary: Story = {}
