import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <div className="navbar">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={routes.jobs()}>Jobs</Link>
          </li>
          <li>
            <Link to={routes.tasks()}>Tasks</Link>
          </li>
        </ul>
      </div>
      <div className="p-2">{children}</div>
    </div>
  )
}

export default MainLayout
