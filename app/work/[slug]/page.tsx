import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense, ViewTransition } from "react";
import { artFor } from "@/components/art";
import { Fill } from "@/components/Fill";
import { Arrow } from "@/components/objects";
import { getStory, stories } from "@/lib/content";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) return {};
  return { title: `${s.title} — Brandon Mok`, description: s.oneLiner };
}

export default function StoryPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<div className="page" />}>
      <Story params={params} />
    </Suspense>
  );
}

async function Story({ params }: { params: PageProps<"/work/[slug]">["params"] }) {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) notFound();

  const Art = artFor[s.slug];
  const i = stories.indexOf(s);
  const prev = stories[(i - 1 + stories.length) % stories.length];
  const next = stories[(i + 1) % stories.length];

  return (
    <div className="page">
      <header className="nav">
        <Link href="/#work" className="nav__back">
          <Arrow dir="left" /> Brandon Mok
        </Link>
        <nav aria-label="Primary" className="nav__links">
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <main className="study">
        <div className={`study__field study__field--${s.kind.toLowerCase()}`}>
          <ViewTransition name={`obj-${s.slug}`} share="morph" default="none">
            <span className="study__obj">
              <Art aria-hidden="true" focusable="false" />
            </span>
          </ViewTransition>
        </div>

        <h1 className="study__title">{s.title}</h1>
        <p className="study__lead">{s.oneLiner}</p>

        <dl className="meta">
          <div>
            <dt>Role</dt>
            <dd>{s.role}</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>{s.when}</dd>
          </div>
          <div>
            <dt>Where</dt>
            <dd>{s.where}</dd>
          </div>
        </dl>

        {s.links && (
          <p className="study__links">
            {s.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener">
                {l.label} <Arrow />
              </a>
            ))}
          </p>
        )}

        {s.note && <p className="study__note">{s.note}</p>}

        {s.context && (
          <section className="sec">
            <h2>Context</h2>
            {s.context.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </section>
        )}

        <section className="sec">
          <h2>{s.problemTitle ?? "The problem"}</h2>
          {s.problem.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </section>

        <section className="sec">
          <h2>What I did</h2>
          <ul className="did">
            {s.did.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <section className="sec">
          <h2>Who I did it with</h2>
          <ul className="with">
            {s.withWhom.map((w) => (
              <li key={w.name}>
                <span className="with__name">
                  <Fill text={w.name} />
                </span>
                <span className="with__part">
                  <Fill text={w.part} />
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="sec">
          <h2>What I learned</h2>
          {s.learned.map((t) => (
            <p key={t} className="learned">
              {t}
            </p>
          ))}
        </section>

        {s.stack && (
          <section className="sec">
            <h2>Tools</h2>
            <p className="stack">{s.stack.join(" · ")}</p>
          </section>
        )}

        <nav className="pager" aria-label="More work">
          <Link href={`/work/${prev.slug}`}>
            <Arrow dir="left" /> {prev.title}
          </Link>
          <Link href={`/work/${next.slug}`} className="pager__next">
            {next.title} <Arrow />
          </Link>
        </nav>
      </main>

      <footer className="foot">© 2026 Brandon Mok</footer>
    </div>
  );
}
