export default function SourceLinks({ sources }) {
  if (!sources?.length) return null;
  return (
    <p className="sources">
      Sources:{' '}
      {sources.map((s, i) => (
        <span key={i}>
          {i > 0 && ', '}
          <a href={s.url}>{s.label}</a>
        </span>
      ))}
    </p>
  );
}