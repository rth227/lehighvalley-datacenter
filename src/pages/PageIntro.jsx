// shared heading block at the top of each inner page

export default function PageIntro({ title, intro }) {
  return (
    <section className="page-intro">
      <div className="wrap">
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </div>
    </section>
  );
}