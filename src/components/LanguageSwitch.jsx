import { useContent } from '../i18n/LanguageContext.jsx';

// make this true once src/content/es exists
const SPANISH_READY = false;

export default function LanguageSwitch() {
  const { lang, setLang, content } = useContent();

  return (
    <div className="lang-switch" role="group" aria-label={content.site.languageLabel}>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
        English
      </button>
      <button
        type="button"
        aria-pressed={lang === 'es'}
        disabled={!SPANISH_READY}
        onClick={() => setLang('es')}
        title={SPANISH_READY ? undefined : content.site.spanishComingSoon}
      >
        {SPANISH_READY ? 'Español' : content.site.spanishComingSoon}
      </button>
    </div>
  );
}