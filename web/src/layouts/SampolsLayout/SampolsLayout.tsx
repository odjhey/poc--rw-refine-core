import { Link, routes } from '@redwoodjs/router'

type SampolLayoutProps = {
  children?: React.ReactNode
}

const SampolLayout = ({ children }: SampolLayoutProps) => {
  return (
    <>
      <h1>sampols</h1>
      <Link to={routes.newSampol()} className="link">
        New
      </Link>
      {children}
    </>
  )
}

export default SampolLayout
