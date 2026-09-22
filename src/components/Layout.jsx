import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const T = {
  index: { en: 'Index', it: 'Indice' },
  footerTag: { en: 'an open file. Still being written.', it: 'un file aperto. Ancora in scrittura.' },
  footerCred: { en: 'No guru. No belief required. Just sources.', it: 'Nessun guru. Nessuna fede richiesta. Solo fonti.' },
  footerCopy: { en: '© 2026 Notebook 666. This is the first one. There will be more.', it: '© 2026 Notebook 666. Questo è il primo. Ne arriveranno altri.' },
  notice: { it: 'Questa voce non è ancora stata tradotta — resta in inglese per ora, l\'italiano arriva con le prossime.' },
}

export default function Layout({ children, translated = true }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [lang, setLang] = useLanguage()
  const showNotice = lang === 'it' && !translated

  return (
    <>
      <div className="topbar">
        <Link className="brand" to="/">
          <span className="mark" />
          NOTEBOOK 666
        </Link>
        <div className="topbar-right">
          {!isHome && <Link className="back" to="/">{T.index[lang]}</Link>}
          <div className="langswitch" role="group" aria-label="Language">
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >EN</button>
            <button
              className={lang === 'it' ? 'active' : ''}
              onClick={() => setLang('it')}
              aria-pressed={lang === 'it'}
            >IT</button>
          </div>
        </div>
      </div>
      <div className="wrap">
        {showNotice && <p className="lang-notice">{T.notice.it}</p>}
        {children}
        <footer className="sitefooter">
          <span><Link to="/">Notebook 666</Link> — {T.footerTag[lang]}</span>
          <span>{T.footerCred[lang]}</span>
          <span className="copy">{T.footerCopy[lang]}</span>
        </footer>
      </div>
    </>
  )
}
