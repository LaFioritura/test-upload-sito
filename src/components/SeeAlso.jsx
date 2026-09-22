import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const LABEL = { en: 'See also', it: 'Vedi anche' }

export default function SeeAlso({ links }) {
  const [lang] = useLanguage()
  return (
    <div className="see-also">
      <span className="lbl">{LABEL[lang]}</span>
      {links.map(([to, label]) => (
        <Link key={to} to={to}>{label}</Link>
      ))}
    </div>
  )
}
