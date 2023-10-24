import { MetaTags } from '@redwoodjs/web'

import Sampols from 'src/components/Sampols/Sampols'

const SampolsPage = () => {
  return (
    <>
      <MetaTags title="Sampols" description="Sampols page" />

      <Sampols></Sampols>
    </>
  )
}

export default SampolsPage
