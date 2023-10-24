import { Refine } from '@refinedev/core'

import dataProvider from 'src/pages/HomePage/dataProvider'
import { routerProvider } from 'src/pages/HomePage/routeProvider'

type RefineLayoutProps = {
  children?: React.ReactNode
}

const RefineLayout = ({ children }: RefineLayoutProps) => {
  return (
    <Refine
      dataProvider={dataProvider()}
      routerProvider={routerProvider}
      resources={[{ name: 'sampol', list: '/sampol' }]}
    >
      {children}
    </Refine>
  )
}

export default RefineLayout
