import { useContent } from '../i18n/LanguageContext.jsx';
import MediaPlaceholder from '../components/MediaPlaceholder.jsx';
import Timeline from '../components/Timeline.jsx';

export default function Home() {
  const { content } = useContent();
  const { home } = content;

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>{home.heroTitle}</h1>
            <p className="lead">{home.heroBody}</p>
          </div>
          <ul className="hero-points">
            {home.heroPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
        <svg className="river" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
          <path className="river-blue" d="M0 30 C 150 5, 300 55, 450 30 S 750 5, 900 30 S 1100 55, 1200 30" />
          <path className="river-green" d="M0 42 C 150 17, 300 67, 450 42 S 750 17, 900 42 S 1100 67, 1200 42" />
        </svg>
      </section>

      <section className="section" aria-labelledby="documentary">
        <div className="wrap">
          <div className="section-head">
            <h2 id="documentary">{home.documentaryTitle}</h2>
            <p>{home.documentaryBody}</p>
          </div>
          {/* Replace with a YouTube or Vimeo embed when the documentary is finished. */}
          <MediaPlaceholder kind="video" ratio="16 / 9" large label={home.documentaryPlaceholder} />
        </div>
      </section>

      <section className="section" aria-labelledby="media">
        <div className="wrap">
          <div className="section-head">
            <h2 id="media">{home.mediaTitle}</h2>
            <p>{home.mediaBody}</p>
          </div>
          <div className="media-grid">
            <MediaPlaceholder kind="photo" ratio="4 / 3" label="[Photo: proposed site]" />
            <MediaPlaceholder kind="video" ratio="4 / 3" label="[Video: interview clip]" />
            <MediaPlaceholder kind="photo" ratio="4 / 3" label="[Photo: public meeting]" />
            <MediaPlaceholder kind="photo" ratio="4 / 3" label="[Photo: neighborhood]" />
          </div>
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="timeline">
        <div className="wrap split">
          <div className="split-side">
            <h2 id="timeline">{home.timelineTitle}</h2>
            <p>{home.timelineBody}</p>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="section" aria-labelledby="learn">
        <div className="wrap split">
          <div className="split-side">
            <h2 id="learn">{home.learnTitle}</h2>
          </div>
          <div className="faq">
            {home.learnItems.map((item, i) => (
              <details key={i}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}