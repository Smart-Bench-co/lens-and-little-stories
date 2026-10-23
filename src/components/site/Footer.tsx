import { Link } from "@tanstack/react-router";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="section-dark border-t">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="display text-h3">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{site.descriptor}, based in {site.location}.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          <span className="eyebrow mb-2 text-muted-foreground">Explore</span>
          <Link to="/work" className="link-line w-fit">Work</Link>
          <Link to="/about" className="link-line w-fit">About</Link>
          <Link to="/services" className="link-line w-fit">Services</Link>
          <Link to="/journal" className="link-line w-fit">Journal</Link>
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          <span className="eyebrow mb-2 text-muted-foreground">Contact</span>
          <a href={`mailto:${site.email}`} className="link-line w-fit">{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="link-line w-fit">Instagram {site.instagramHandle}</a>
        </div>
      </div>
      <div className="container-x flex justify-between border-t py-6 eyebrow text-muted-foreground">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
