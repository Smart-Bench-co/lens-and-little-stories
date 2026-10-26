import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ProjectTile } from "@/components/site/ProjectTile";
import { articles, categories, formatDate, images, process, projects, readingTime, services, site, socialGallery } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Stories, seen differently` },
      { name: "description", content: "Photography rooted in people, places, and the moments between. Portraits, editorial, weddings and documentary." },
      { property: "og:title", content: `${site.name} — Stories, seen differently` },
      { property: "og:description", content: "Photography rooted in people, places, and the moments between." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects[1]!;
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative h-[100svh] min-h-[560px] overflow-hidden">
        <img src={images.hero} alt="A man looking over Addis Ababa at golden hour" width={1920} height={1088} className="animate-reveal-img absolute inset-0 h-full w-full object-cover object-[72%_center]" />
        <div className="hero-scrim absolute inset-0" />
        <div className="container-x relative flex h-full flex-col justify-end pb-14 md:pb-20">
          <p className="eyebrow animate-rise text-ivory/80" style={{ animationDelay: "900ms" }}>{site.location}</p>
          <h1 className="display text-hero mt-4 text-ivory animate-rise" style={{ animationDelay: "1000ms" }}>
            Stories, <em className="text-ember">seen</em><br />differently.
          </h1>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between animate-rise" style={{ animationDelay: "1200ms" }}>
            <p className="max-w-md text-ivory/80">Photography rooted in people, places, and the moments between.</p>
            <Link to="/work" className="eyebrow group flex items-center gap-3 text-ivory">
              Explore the work <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
        <div className="eyebrow absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ivory/60 md:block" aria-hidden>Scroll ↓</div>
      </section>

      {/* Selected work */}
      <section className="container-x py-24 md:py-36">
        <Reveal className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-ember">Selected work / 2023–2026</p>
          <h2 className="display text-h2 max-w-3xl">A collection of <em>moments,</em> people, and places.</h2>
        </Reveal>
        <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-12">
          <Reveal className="md:col-span-5"><ProjectTile p={projects[0]!} index={0} /></Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 md:mt-40" delay={100}><ProjectTile p={projects[3]!} index={1} /></Reveal>
          <Reveal className="md:col-span-7 md:-mt-10"><ProjectTile p={projects[5]!} index={2} className="md:max-w-[80%]" /></Reveal>
          <Reveal className="md:col-span-4 md:col-start-9 md:mt-24" delay={100}><ProjectTile p={projects[4]!} index={3} /></Reveal>
        </div>
        <div className="mt-20 flex justify-center">
          <Link to="/work" className="display text-h3 link-line italic">Explore all work →</Link>
        </div>
      </section>

      {/* Featured story */}
      <section className="section-dark">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[60vh] overflow-hidden">
            <img src={featured.cover} alt={featured.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <Reveal className="flex flex-col justify-center gap-6 px-6 py-20 md:px-16 lg:px-24">
            <p className="eyebrow text-ember">Feature — No. 02</p>
            <h2 className="display text-h1">{featured.title}</h2>
            <p className="eyebrow text-muted-foreground">{featured.location} · {featured.year}</p>
            <p className="max-w-md text-lg leading-relaxed text-ivory/80">{featured.story[0]}</p>
            <Link to="/work/$slug" params={{ slug: featured.slug }} className="eyebrow link-line w-fit">Discover the story →</Link>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="container-x py-24 md:py-36">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display text-h2">Areas of <em>work</em></h2>
          <p className="max-w-sm text-muted-foreground">Six ways of looking. Each leads to its own collection.</p>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => {
            const count = projects.filter((p) => p.category === c.slug).length;
            return (
              <Reveal key={c.slug} delay={(i % 3) * 80} className={cn(i % 3 === 1 && "lg:mt-16")}>
                <Link to="/work" search={{ category: c.slug }} className="group block">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={c.image} alt={c.name} loading="lazy" className="img-zoom h-full w-full object-cover group-hover:scale-[1.03]" />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="display text-3xl">{c.name}</h3>
                    <span className="eyebrow text-muted-foreground">{count} {count === 1 ? "project" : "projects"} →</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section className="bg-paper py-24 md:py-36">
        <div className="container-x grid items-center gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <img src={images.photographer} alt={`${site.name} holding a film camera`} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
            <p className="eyebrow text-ember">About</p>
            <h2 className="display text-h2 mt-6">Behind the <em>lens.</em></h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>I'm {site.name.split(" ")[0]}, an independent photographer working between portraiture, editorial and documentary.</p>
              <p>I'm drawn to quiet light, patient observation, and the moments people don't realise they're giving away.</p>
            </div>
            <p className="eyebrow mt-8 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ember" /> {site.location} — {site.availability}</p>
            <Link to="/about" className="eyebrow link-line mt-8 inline-block">More about me →</Link>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-dark relative overflow-hidden py-32 md:py-48">
        <img src={projects[4]!.cover} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <Reveal className="container-x relative text-center">
          <h2 className="display text-hero mx-auto max-w-6xl">Every frame has a <em className="text-ember">feeling.</em></h2>
          <p className="mx-auto mt-10 max-w-xl text-lg text-ivory/80">The aim is not simply to document what happened, but to preserve what it felt like to be there.</p>
        </Reveal>
      </section>

      <ServicesSection />

      {/* Process */}
      <section className="border-t py-24 md:py-32">
        <div className="container-x">
          <Reveal><h2 className="display text-h2">The <em>process</em></h2></Reveal>
          <ol className="mt-16 grid gap-10 border-l pl-8 md:grid-cols-4 md:border-l-0 md:border-t md:pl-0 md:pt-10">
            {process.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <li className="list-none">
                  <span className="eyebrow text-ember">{s.n}</span>
                  <h3 className="display mt-3 text-4xl">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Journal */}
      <section className="bg-paper py-24 md:py-36">
        <div className="container-x">
          <Reveal className="flex items-end justify-between">
            <h2 className="display text-h2">From the <em>journal</em></h2>
            <Link to="/journal" className="eyebrow link-line hidden md:inline">All stories →</Link>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-12">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 100} className={i === 0 ? "md:col-span-6" : "md:col-span-3"}>
                <Link to="/journal/$slug" params={{ slug: a.slug }} className="group block">
                  <div className={cn("overflow-hidden bg-muted", i === 0 ? "aspect-[4/3]" : "aspect-[3/4]")}>
                    <img src={a.cover} alt="" loading="lazy" className="img-zoom h-full w-full object-cover group-hover:scale-[1.03]" />
                  </div>
                  <p className="eyebrow mt-5 text-muted-foreground">{formatDate(a.date)} · {readingTime(a)} min read</p>
                  <h3 className={cn("display mt-3", i === 0 ? "text-4xl" : "text-2xl")}>{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-24">
        <div className="container-x flex items-end justify-between">
          <h2 className="display text-h3">Recent frames</h2>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="eyebrow link-line">Follow on Instagram {site.instagramHandle} ↗</a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-1 md:grid-cols-6">
          {socialGallery.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-muted">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <BookingCTA />
    </>
  );
}

function ServicesSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-x py-24 md:py-36">
      <Reveal className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <p className="eyebrow text-ember">Services</p>
        <h2 className="display text-h2">How we can <em>work together</em></h2>
      </Reveal>
      <ul className="mt-16 border-t">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <li key={s.name} className="border-b">
              <button
                className="group flex w-full items-baseline gap-6 py-7 text-left"
                aria-expanded={isOpen}
                aria-controls={`svc-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="eyebrow w-8 text-ember">{String(i + 1).padStart(2, "0")}</span>
                <span className="display flex-1 text-3xl transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">{s.name}</span>
                <span className="eyebrow" aria-hidden>{isOpen ? "−" : "+"}</span>
              </button>
              <div id={`svc-${i}`} className={cn("grid transition-[grid-template-rows] duration-500", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="overflow-hidden">
                  <div className="grid gap-6 pb-8 pl-14 md:grid-cols-3">
                    <p className="text-muted-foreground">{s.description}</p>
                    <p className="text-muted-foreground"><span className="eyebrow block text-foreground">What to expect</span>{s.expect}</p>
                    <Link to="/contact" className="eyebrow link-line h-fit w-fit">Request a quote →</Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function BookingCTA() {
  return (
    <section className="section-dark relative overflow-hidden py-32 md:py-44">
      <img src={projects[3]!.cover} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="container-x relative">
        <h2 className="display text-hero">Have a story<br /><em className="text-ember">worth telling?</em></h2>
        <p className="mt-8 max-w-md text-lg text-ivory/80">Let's create something meaningful together.</p>
        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Link to="/contact" className="eyebrow bg-ember px-8 py-4 text-paper transition-colors hover:bg-ivory hover:text-ink">Start a conversation</Link>
          <a href={`mailto:${site.email}`} className="eyebrow link-line">{site.email}</a>
        </div>
        <p className="eyebrow mt-10 text-muted-foreground">{site.availability}</p>
      </div>
    </section>
  );
}
