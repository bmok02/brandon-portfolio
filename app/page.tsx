import Link from "next/link";
import { ViewTransition, type CSSProperties } from "react";
import { artFor } from "@/components/art";
import { Arrow } from "@/components/objects";
import { kinds, person, places, quote, stories, type Story } from "@/lib/content";

// The still life in the hero: every story's object, placed by hand on one field.
const still: Record<string, { x: number; y: number; w: number; r: number }> = {
  govtech: { x: 15, y: 20, w: 19, r: -6 },
  "tea-companion": { x: 40, y: 17, w: 22, r: 4 },
  nusdevs: { x: 63, y: 18, w: 14, r: 8 },
  synapxe: { x: 85, y: 21, w: 22, r: -5 },
  "food-reccos": { x: 14, y: 50, w: 22, r: 3 },
  "movie-recommender": { x: 39, y: 48, w: 22, r: -9 },
  "aquarii-bd": { x: 63, y: 52, w: 21, r: 6 },
  "cu-boulder": { x: 87, y: 50, w: 22, r: 5 },
  turtletrackr: { x: 15, y: 80, w: 19, r: -12 },
  captslam: { x: 38, y: 80, w: 21, r: 0 },
  "capt-kamal": { x: 62, y: 80, w: 23, r: 7 },
  "aquarii-website": { x: 86, y: 81, w: 21, r: -4 },
};

function StillLife() {
  return (
    <div className="still" aria-label="Everything on this page, as objects">
      <ul className="still__items">
        {stories.map((s, i) => {
          const Art = artFor[s.slug];
          const p = still[s.slug];
          const style = {
            "--x": `${p.x}%`,
            "--y": `${p.y}%`,
            "--w": `${p.w}%`,
            "--r": `${p.r}deg`,
            "--i": i,
          } as CSSProperties;
          return (
            <li key={s.slug} className="still__item" style={style}>
              <Link href={`/work/${s.slug}`} className="still__link" aria-label={s.title}>
                <Art aria-hidden="true" focusable="false" />
                <span className="still__tag" aria-hidden="true">
                  {s.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Tile({ s }: { s: Story }) {
  const Art = artFor[s.slug];
  return (
    <li>
      <Link href={`/work/${s.slug}`} className="tile">
        <span className="tile__field">
          <ViewTransition name={`obj-${s.slug}`} share="morph" default="none">
            <span className={`tile__obj tile__obj--${s.slug}`}>
              <Art aria-hidden="true" focusable="false" />
            </span>
          </ViewTransition>
        </span>
        <span className="tile__head">
          <span className="tile__title">{s.title}</span>
          <span className="tile__year">{s.year}</span>
        </span>
        <span className="tile__line">{s.oneLiner}</span>
      </Link>
    </li>
  );
}

export default function Home() {
  return (
    <div className="page">
      <a className="skip" href="#work">
        Skip to work
      </a>
      <header className="nav">
        <Link href="/" className="nav__name">
          Brandon Mok
        </Link>
        <nav aria-label="Primary" className="nav__links">
          <a href="#work">Work</a>
          <a href="#places">Places</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="name">
        <div className="intro">
          <h1 id="name">Brandon Mok</h1>
          <p className="intro__role">{person.role}</p>
          {person.intro.map((p) => (
            <p key={p} className="intro__p">
              {p}
            </p>
          ))}
          <ul className="intro__facts">
            {person.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="intro__links">
            <a href={`mailto:${person.email}`}>Email</a>
            <a href={person.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href={person.github} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={person.resume} download>
              Résumé
            </a>
          </p>
        </div>
        <StillLife />
        </section>

        <section id="work" className="block" aria-label="Work">
          {kinds.map(({ kind, title }) => (
            <div key={kind} className={`group group--${kind.toLowerCase()}`}>
              <h2 className="group__title">
                {title}
                <span>{stories.filter((s) => s.kind === kind).length}</span>
              </h2>
              <ul className="tiles">
                {stories
                  .filter((s) => s.kind === kind)
                  .map((s) => (
                    <Tile key={s.slug} s={s} />
                  ))}
              </ul>
            </div>
          ))}
        </section>

        <figure className="quote">
          <blockquote>“{quote.text}”</blockquote>
          <figcaption>
            {quote.by}, {quote.role}
          </figcaption>
        </figure>

        <section id="places" className="block" aria-labelledby="places-title">
          <h2 id="places-title" className="block__title">
            Where I have learned
          </h2>
          <ul className="places">
            {places.map((p) => (
              <li key={p.city}>
                <p className="places__head">
                  <span className="places__city">
                    {p.city}
                    <span>{p.country}</span>
                  </span>
                  <span className="places__when">{p.when}</span>
                </p>
                <p className="places__line">{p.line}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="block contact" aria-labelledby="contact-title">
          <h2 id="contact-title" className="block__title">
            Contact
          </h2>
          <p className="contact__lead">
            If you are building something meaningful, especially with AI, I would love to hear about it.
          </p>
          <p className="contact__links">
            <a href={`mailto:${person.email}`} className="contact__email">
              {person.email} <Arrow />
            </a>
          </p>
          <p className="intro__links">
            <a href={person.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href={person.github} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={person.resume} download>
              Résumé (PDF)
            </a>
          </p>
        </section>
      </main>

      <footer className="foot">© 2026 Brandon Mok</footer>
    </div>
  );
}
