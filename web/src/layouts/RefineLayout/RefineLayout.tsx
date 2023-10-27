import { PropsWithChildren } from 'react'

import { useApolloClient } from '@apollo/client'
import { Refine, useBreadcrumb, useMenu } from '@refinedev/core'

import { Link } from '@redwoodjs/router'

import { dataProvider } from 'src/lib/refine-data-provider'
import { routerProvider } from 'src/lib/refine-route-provider'

type RefineLayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Menu></Menu>
      <div className="p-2">
        <Breadcrumb></Breadcrumb>
        <div>{children}</div>
      </div>
    </div>
  )
}

const Menu = () => {
  const { menuItems } = useMenu()

  return (
    <>
      <ul className="menu menu-horizontal">
        {menuItems.map((item) => (
          <li key={item.key}>
            <Link to={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

const Breadcrumb = () => {
  const { breadcrumbs } = useBreadcrumb()

  return (
    <>
      <div className="breadcrumbs">
        <ul>
          {breadcrumbs.map((breadcrumb) => (
            <li key={`breadcrumb-${breadcrumb.label}`}>
              {breadcrumb.href ? (
                <Link to={breadcrumb.href}>{breadcrumb.label}</Link>
              ) : (
                <span>{breadcrumb.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const RefineLayout = ({ children }: RefineLayoutProps) => {
  const client = useApolloClient()

  return (
    <Refine
      // mejo buggy yung syncWithLocation
      // options={{ syncWithLocation: true }}
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
          meta: { fields: ['id', 'title', 'status', 'createdAt', 'jobId'] },
        },
      ]}
    >
      <Layout>{children}</Layout>
    </Refine>
  )
}

export default RefineLayout
