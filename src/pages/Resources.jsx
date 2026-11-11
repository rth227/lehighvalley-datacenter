import { useContent } from '../i18n/LanguageContext.jsx';
import PageIntro from './PageIntro.jsx';

export default function Resources() {
  const { content } = useContent();
  const { resources } = content;

  return (
    <>
      <PageIntro title={resources.title} intro={resources.intro} />

      {resources.groups.map((group, i) => (
        <section key={i} className={`section${i % 2 === 1 ? ' section--tinted' : ''}`}>
          <div className="wrap">
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            <ul className="resource-list">
              {group.items.map((r, j) => (
                <li key={j}>
                  <a href={r.url}>{r.label}</a>
                  <span>{r.source}{r.date && ` · ${r.date}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}