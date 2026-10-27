import { createContext, useContext, useState } from 'react';
import en from '../content/en/index.js';

// to add spanish (or another language)
// 1. copy src/content/en to src/content/es and translate the text in each file
// 2. import it here: import es from '../content/es/index.js';
// 3. add it to this object: const languages = { en, es };
// 4. in src/components/LanguageSwitch.jsx, set SPANISH_READY to true

const languages = { en };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const content = languages[lang] ?? languages.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, content, available: Object.keys(languages) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useContent() {
  return useContext(LanguageContext);
}