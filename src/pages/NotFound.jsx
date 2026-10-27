import { Link } from 'react-router-dom';
import { useContent } from '../i18n/LanguageContext.jsx';

export default function NotFound() {
  const { content } = useContent();
  const { site } = content;
  return (
    <section className="page-intro">
      <div className="wrap">
        <h1>{site.notFoundTitle}</h1>
        <p className="lead">{site.notFoundBody}</p>
        <p><Link to="/">{site.notFoundLink}</Link></p>
      </div>
    </section>
  );
}