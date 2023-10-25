import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  children: React.ReactNode
}

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}: LayoutProps) => {
  return (
    <div>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header>
        <h1>
          <Link to={routes[titleTo]()} className="link">
            {title}
          </Link>
        </h1>
        <Link to={routes[buttonTo]()}>
          <div className="btn btn-sm">+</div> {buttonLabel}
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
