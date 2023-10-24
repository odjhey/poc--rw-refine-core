import { MetaTags } from '@redwoodjs/web'

import { NewSampol } from 'src/components/NewSampol/NewSampol'

const NewSampolPage = () => {
  return (
    <>
      <MetaTags title="NewSampol" description="NewSampol page" />

      <NewSampol></NewSampol>
    </>
  )
}

export default NewSampolPage
