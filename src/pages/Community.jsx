import { useContent } from '../i18n/LanguageContext.jsx';
import PageIntro from './PageIntro.jsx';
import MediaPlaceholder from '../components/MediaPlaceholder.jsx';

export default function Community() {
  const { content } = useContent();
  const { community } = content;

  return (
    <>
      <PageIntro title={community.title} intro={community.intro} />

      <section className="section" aria-labelledby="voices">
        <div className="wrap">
          <h2 id="voices">{community.voicesTitle}</h2>
          <div className="voices">
            {community.voices.map((v, i) => (
              <figure key={i} className="voice">
                <blockquote>
                  <p>{v.quote}</p>
                </blockquote>
                <figcaption>
                  <strong>{v.name}</strong>
                  <span>{v.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="clips">
        <div className="wrap">
          <div className="section-head">
            <h2 id="clips">{community.clipsTitle}</h2>
            <p>{community.clipsBody}</p>
          </div>
          <div className="media-grid media-grid--three">
            {community.clips.map((c, i) => (
              <MediaPlaceholder key={i} kind="video" ratio="16 / 9" label={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="involved">
        <div className="wrap split">
          <div className="split-side">
            <h2 id="involved">{community.involvedTitle}</h2>
          </div>
          <ul className="action-list">
            {community.involved.map((item, i) => (
              <li key={i}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <a href={item.link.url}>{item.link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="resources">
        <div className="wrap split">
          <div className="split-side">
            <h2 id="resources">{community.resourcesTitle}</h2>
            <p>{community.resourcesBody}</p>
          </div>
          <ul className="resource-list">
            {community.resources.map((r, i) => (
              <li key={i}>
                <a href={r.url}>{r.label}</a>
                <span>{r.kind}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}