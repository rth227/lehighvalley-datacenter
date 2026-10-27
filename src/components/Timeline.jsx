import { useContent } from '../i18n/LanguageContext.jsx';
import SourceLinks from './SourceLinks.jsx';

// vertical timeline with one marker per event
// events live in src/content/en/timeline.js

export default function Timeline() {
  const { content } = useContent();
  const { timeline, timelineLegend } = content;

  return (
    <div className="timeline-block">
      <ul className="timeline-legend" aria-label="Legend">
        {Object.entries(timelineLegend).map(([type, label]) => (
          <li key={type}>
            <span className={`dot dot--${type}`} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
      <ol className="timeline">
        {timeline.map((event, i) => (
          <li key={i} className={`timeline-item timeline-item--${event.type}`}>
            <span className={`dot dot--${event.type}`} aria-hidden="true" />
            <p className="timeline-date">
              <time>{event.date}</time>
              <span className="visually-hidden">, {timelineLegend[event.type]}</span>
            </p>
            <h3>{event.title}</h3>
            <p>{event.body}</p>
            <SourceLinks sources={event.source ? [event.source] : []} />
          </li>
        ))}
      </ol>
    </div>
  );
}