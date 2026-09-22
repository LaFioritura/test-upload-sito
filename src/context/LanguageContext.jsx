import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext(['en', () => {}])

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  return (
    <LanguageContext.Provider value={[lang, setLang]}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

// Small dictionary for site chrome and any page that hasn't been fully
// translated yet — pick(t, lang) returns t.en or t.it, falling back to
// English if an Italian string is missing so nothing ever renders blank.
export function pick(t, lang) {
  if (typeof t === 'string') return t
  return t[lang] || t.en
}
