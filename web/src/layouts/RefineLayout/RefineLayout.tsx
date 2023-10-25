import { useApolloClient } from '@apollo/client'
import { Refine } from '@refinedev/core'

import { dataProvider } from 'src/lib/refine-data-provider'
import { routerProvider } from 'src/lib/refine-route-provider'

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
          create: '/new-sampol',
          meta: { fields: ['id', 'title', 'status', 'createdAt'] },
        },
        {
          name: 'job',
          list: '/jobs',
          create: '/jobs/new',
          meta: { fields: ['id', 'title', 'status', 'createdAt'] },
        },
        {
          name: 'task',
          list: '/tasks',
          create: '/tasks/new',
          meta: { fields: ['id', 'title', 'status', 'createdAt'] },
        },
      ]}
    >
      {children}
    </Refine>
  )
}

export default RefineLayout
