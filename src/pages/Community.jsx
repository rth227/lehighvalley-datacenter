import { useContent } from '../i18n/LanguageContext.jsx';
import MediaPlaceholder from '../components/MediaPlaceholder.jsx';
import Clip from '../components/Clip.jsx';

// community response, shown as a section inside the Human-Centered AI page
// (it no longer has its own tab - /community redirects there)
export default function Community() {
  const { content } = useContent();
  const { community } = content;

  return (
    <div id="community-response">
      <section className="section section--tinted" aria-labelledby="community-title">
        <div className="wrap narrow">
          <h2 id="community-title">{community.title}</h2>
          <p className="lead">{community.intro}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="voices">
        <div className="wrap">
          <div className="section-head">
            <h2 id="voices">{community.voicesTitle}</h2>
            {community.voicesNote && <p>{community.voicesNote}</p>}
          </div>
          <div className="voices">
            {community.voices.map((v, i) => (
              <figure key={i} className="voice">
                <blockquote>
                  <p>“{v.quote}”</p>
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
            {community.clips.map((c, i) =>
              typeof c === 'string' ? (
                <MediaPlaceholder key={i} kind="video" ratio="16 / 9" label={c} />
              ) : (
                <Clip key={c.file} clip={c} />
              )
            )}
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
                  <span>{r.source}{r.source && ' | '}{r.kind}</span>
                </li>
              ))}
            </ul>
        </div>
      </section>
    </div>
  );
}