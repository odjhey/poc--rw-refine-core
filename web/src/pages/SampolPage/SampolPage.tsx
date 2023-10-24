import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SampolPage = () => {
  return (
    <>
      <MetaTags title="Sampol" description="Sampol page" />

      <h1>SampolPage</h1>
      <p>
        Find me in <code>./web/src/pages/SampolPage/SampolPage.tsx</code>
      </p>
      <p>
        My default route is named <code>sampol</code>, link to me with `
        <Link to={routes.sampol()}>Sampol</Link>`
      </p>
    </>
  )
}

export default SampolPage
