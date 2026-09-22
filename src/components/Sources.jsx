import { useLanguage } from '../context/LanguageContext.jsx'

const LABEL = { en: 'Sources', it: 'Fonti' }

export default function Sources({ items }) {
  const [lang] = useLanguage()
  return (
    <div className="sources">
      <h3>{LABEL[lang]}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  )
}
