import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { BookingCTA } from "./index";
import { images, site } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      { name: "description", content: `Meet ${site.name}, an independent photographer based in ${site.location}.` },
      { property: "og:title", content: `About — ${site.name}` },
      { property: "og:description", content: "Behind the lens: approach, inspirations and way of working." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About" title={<>Behind the <em>lens.</em></>} />
      <section className="container-x grid gap-14 pb-28 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <img src={images.photographer} alt={site.name} className="aspect-[4/5] w-full object-cover" />
          <p className="eyebrow mt-4 text-muted-foreground">{site.location}</p>
        </Reveal>
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7" delay={120}>
          <p className="display text-h3 text-foreground">I make photographs about people, places, and the quiet moments between them.</p>
          <p>My work moves between portraiture, editorial, weddings and long-form documentary. The subject changes; the approach doesn't — patient observation, natural light wherever possible, and a respect for the people in front of the camera.</p>
          <p>I'm inspired by printed photo books, cinema, and the way light falls across a room at the end of the day.</p>
          <p>I work with individuals, couples, publications and brands who want images that feel considered rather than generic.</p>
        </Reveal>
      </section>
      <BookingCTA />
    </>
  );
}
