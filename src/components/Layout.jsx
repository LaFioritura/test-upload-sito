import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <div className="topbar">
        <Link className="brand" to="/">
          <span className="mark" />
          NOTEBOOK 666
        </Link>
        {!isHome && <Link className="back" to="/">Index</Link>}
      </div>
      <div className="wrap">
        {children}
        {!isHome && (
          <footer className="sitefooter">
            <span><Link to="/">Notebook 666</Link> — a research portal, sourced page by page</span>
          </footer>
        )}
      </div>
    </>
  )
}
