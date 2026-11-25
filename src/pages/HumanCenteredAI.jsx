import { useContent } from '../i18n/LanguageContext.jsx';
import PageIntro from './PageIntro.jsx';
import Community from './Community.jsx';
import Clip from '../components/Clip.jsx';

export default function HumanCenteredAI() {
  const { content } = useContent();
  const { hcai } = content;

  return (
    <>
      <PageIntro title={hcai.title} intro={hcai.intro} />
      <section className="section">
        <div className="wrap prose-sections">
          {hcai.sections.map((s, i) => (
            <article key={i}>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
              {s.clips?.length > 0 && (
                <>
                  {s.clipsIntro && <p className="clips-intro">{s.clipsIntro}</p>}
                  <div className="clip-grid">
                    {s.clips.map((c) => (
                      <Clip key={c.file} clip={c} />
                    ))}
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </section>
      <Community />
      <section className="section section--tinted">
        <div className="wrap narrow">
          <h2>{hcai.reflectionTitle}</h2>
          <p>{hcai.reflectionBody}</p>
        </div>
      </section>
    </>
  );
}