type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className="p-2">{children}</div>
}

export default MainLayout
