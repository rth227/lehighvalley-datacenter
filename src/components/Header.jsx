import { NavLink, Link } from 'react-router-dom';
import { useContent } from '../i18n/LanguageContext.jsx';
import LanguageSwitch from './LanguageSwitch.jsx';

export default function Header() {
  const { content } = useContent();
  const { site } = content;

  return (
    <header className="site-header">
      <div className="header-top wrap">
        <Link to="/" className="brand">
          <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="7" />
            <path d="M4 21c4-3 8-3 12 0s8 3 12 0" />
            <circle cx="16" cy="11" r="3.5" />
          </svg>
          <span className="brand-text">
            <span className="brand-title">{site.projectTitle}</span>
            <span className="brand-tagline">{site.tagline}</span>
          </span>
        </Link>
        <LanguageSwitch />
      </div>
      <nav className="tabs" aria-label="Main">
        <ul className="wrap">
          {site.nav.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} end={item.path === '/'}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}