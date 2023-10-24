import { useApolloClient } from '@apollo/client'
import { Refine } from '@refinedev/core'

import dataProvider from 'src/pages/HomePage/dataProvider'
import { routerProvider } from 'src/pages/HomePage/routeProvider'

type RefineLayoutProps = {
  children?: React.ReactNode
}

const RefineLayout = ({ children }: RefineLayoutProps) => {
  const client = useApolloClient()

  return (
    <Refine
      // find a way to extract same gql client (apollo client) from rw
      dataProvider={dataProvider(client)}
      routerProvider={routerProvider}
      resources={[
        {
          name: 'sampol',
          list: '/sampols',
          meta: { fields: ['id', 'title', 'status', 'createdAt'] },
        },
      ]}
    >
      {children}
    </Refine>
  )
}

export default RefineLayout