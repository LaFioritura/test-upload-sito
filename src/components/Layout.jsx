import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children, wide }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <div className="topbar">
        <Link className="brand" to="/">
          <span className="mark" />
          Soratlas
        </Link>
        {!isHome && <Link className="back" to="/">← indice</Link>}
      </div>
      <div className={wide ? 'wrap wide' : 'wrap'}>
        {children}
        {!isHome && (
          <footer className="sitefooter">
            <Link to="/">Soratlas</Link> · portale sull'antroposofia di Rudolf Steiner
          </footer>
        )}
      </div>
    </>
  )
}
