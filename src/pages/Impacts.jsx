import { useContent } from '../i18n/LanguageContext.jsx';
import PageIntro from './PageIntro.jsx';
import SourceLinks from '../components/SourceLinks.jsx';
import Clip from '../components/Clip.jsx';

export default function Impacts() {
  const { content } = useContent();
  const { impacts } = content;

  return (
    <>
      <PageIntro title={impacts.title} intro={impacts.intro} />
      <section className="section">
        <div className="wrap split">
          <nav className="split-side jump-links" aria-label="Topics on this page">
            <ul>
              {impacts.topics.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="topic-list">
            {impacts.topics.map((t) => (
              <article key={t.id} id={t.id} className="topic">
                <h2>{t.title}</h2>
                <p>{t.summary}</p>
                <ul>
                  {t.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                {t.clips?.length > 0 && (
                  <>
                    <h3 className="clips-heading">{impacts.clipsHeading}</h3>
                    {t.clipsIntro && <p className="clips-intro">{t.clipsIntro}</p>}
                    <div className="clip-grid">
                      {t.clips.map((c) => (
                        <Clip key={c.file} clip={c} />
                      ))}
                    </div>
                  </>
                )}
                <SourceLinks sources={t.sources} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}