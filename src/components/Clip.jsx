import { useState } from 'react';
import { useContent } from '../i18n/LanguageContext.jsx';
import MediaPlaceholder from './MediaPlaceholder.jsx';

// one interview video: the player, its title and label, and a transcript.
// drop the file in public/clips/ using the name in `clip.file` and it appears.
// a .jpg with the same name is the still shown before someone presses play.
// until then (or if the file can't play) the gray placeholder shows instead.
export default function Clip({ clip }) {
  const { content } = useContent();
  const [missing, setMissing] = useState(false);

  return (
    <figure className="clip">
      {missing ? (
        <MediaPlaceholder kind="video" ratio="16 / 9" label={`[Clip: ${clip.file}]`} />
      ) : (
        <video
          className="clip-video"
          src={`/clips/${clip.file}`}
          poster={`/clips/${clip.file.replace(/\.mp4$/, '.jpg')}`}
          controls
          playsInline
          preload="metadata"
          aria-label={clip.title}
          onError={() => setMissing(true)}
        />
      )}
      <figcaption>
        <strong className="clip-title">{clip.title}</strong>
        <span className="clip-speaker">{clip.speaker}</span>
        <span className="clip-role">{clip.role}</span>
        <span className="clip-label">{clip.label}</span>
        {clip.note && <span className="clip-note">{clip.note}</span>}
      </figcaption>
      <details className="clip-transcript">
        <summary>{content.site.clipTranscript}</summary>
        <p>{clip.transcript}</p>
      </details>
    </figure>
  );
}
