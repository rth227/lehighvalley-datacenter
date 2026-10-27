import { useContent } from '../i18n/LanguageContext.jsx';

export default function Footer() {
  const { content } = useContent();
  const { site } = content;

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-title">{site.projectTitle}</p>
          <p>{site.tagline}</p>
        </div>
        <div>
          <p className="footer-label">Created by</p>
          <ul className="footer-names">
            {site.team.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-label">{site.university}</p>
          <p>{site.course}</p>
          <p>{site.semester}</p>
        </div>
      </div>
    </footer>
  );
}