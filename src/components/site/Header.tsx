import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const solid = scrolled || !overHero;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid ? "bg-background/90 py-3 text-foreground backdrop-blur-md border-b" : "py-6 text-ivory",
        )}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Link to="/" className="group flex flex-col leading-none" aria-label={`${site.name} — home`}>
            <span className="display text-2xl md:text-[1.7rem]">{site.name}</span>
            <span className="eyebrow mt-1 text-[0.6rem] opacity-70">{site.descriptor}</span>
          </Link>
          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="eyebrow link-line pb-0.5"
                activeProps={{ className: "text-ember" }}
              >
                {l.label}
              </Link>
            ))}
            <span className="eyebrow hidden items-center gap-2 opacity-70 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden /> {site.availability}
            </span>
          </nav>
          <button
            className="eyebrow md:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
      </header>

      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="section-dark fixed inset-0 z-[60] flex flex-col animate-in fade-in duration-300">
          <div className="container-x flex items-center justify-between py-6">
            <span className="display text-2xl">{site.name}</span>
            <button className="eyebrow" onClick={() => setOpen(false)} autoFocus>Close</button>
          </div>
          <nav aria-label="Mobile" className="container-x mt-10 flex flex-col gap-4">
            {links.map((l, i) => (
              <Link key={l.to} to={l.to} className="display text-6xl animate-rise" style={{ animationDelay: `${i * 60}ms` }} activeProps={{ className: "text-ember italic" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="container-x mt-auto pb-10 eyebrow text-stone">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      )}
    </>
  );
}
