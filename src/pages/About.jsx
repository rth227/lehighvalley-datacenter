import { useContent } from '../i18n/LanguageContext.jsx';
import PageIntro from './PageIntro.jsx';
import MediaPlaceholder from '../components/MediaPlaceholder.jsx';

export default function About() {
  const { content } = useContent();
  const { about, site } = content;

  return (
    <>
      <PageIntro title={about.title} intro={about.intro} />

      <section className="section" aria-labelledby="team">
        <div className="wrap">
          <h2 id="team">{about.teamTitle}</h2>
          <ul className="team">
            {about.members.map((m, i) => (
              <li key={i}>
                <MediaPlaceholder kind="photo" ratio="1 / 1" label="[Headshot]" />
                <h3>{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <p>{m.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="wrap prose-sections">
          <article>
            <h2>{about.methodsTitle}</h2>
            <p>{about.methodsBody}</p>
          </article>
          <article>
            <h2>{about.thanksTitle}</h2>
            <p>{about.thanksBody}</p>
          </article>
          <article>
            <h2>{about.contactTitle}</h2>
            <p>
              {about.contactBody} <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}