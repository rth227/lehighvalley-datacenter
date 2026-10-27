// gray box that stands in for a photo / video 
// replace <MediaPlaceholder /> with an <img>, <video>, or YouTube/Vimeo <iframe>
export default function MediaPlaceholder({ label, kind = 'photo', ratio = '4 / 3', large = false }) {
  return (
    <figure className={`media-placeholder${large ? ' media-placeholder--large' : ''}`} style={{ aspectRatio: ratio }}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {kind === 'video' ? (
          <path d="M9 7.5v9l7.5-4.5z" />
        ) : (
          <path d="M4 17l5-5 4 4 2.5-2.5L20 17M8.5 8.5a1.5 1.5 0 1 1 0 .01" />
        )}
      </svg>
      <figcaption>{label}</figcaption>
    </figure>
  );
}