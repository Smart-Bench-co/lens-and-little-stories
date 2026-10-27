import { Link } from "@tanstack/react-router";
import { categories, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";

const ratios = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
};

type ProjectTileProps = {
  p: Project;
  index?: number;
  className?: string;
  showGallery?: boolean;
};

export function ProjectTile({ p, index, className, showGallery = false }: ProjectTileProps) {
  const cat = categories.find((c) => c.slug === p.category)?.name;

  // Include the cover and remove duplicate image paths.
  const galleryImages = [...new Set([p.cover, ...p.gallery])].slice(0, 3);
  const reversed = (index ?? 0) % 2 === 1;

  const imageClass =
    "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]";

  return (
    <Link to="/work/$slug" params={{ slug: p.slug }} className={cn("group block", className)}>
      {showGallery && galleryImages.length >= 3 ? (
        <div className="grid aspect-[4/3] grid-cols-2 grid-rows-2 gap-2 overflow-hidden bg-muted">
          {/* Main editorial photograph */}
          <div
            className={cn(
              "relative min-h-0 overflow-hidden",
              reversed ? "col-start-2 row-span-2" : "col-start-1 row-span-2",
            )}
          >
            <img
              src={galleryImages[0]}
              alt={`${p.title} — featured photograph`}
              loading="lazy"
              className={imageClass}
            />
          </div>

          {/* Supporting photograph */}
          <div
            className={cn(
              "relative min-h-0 overflow-hidden",
              reversed ? "col-start-1 row-start-1" : "col-start-2 row-start-1",
            )}
          >
            <img
              src={galleryImages[1]}
              alt={`${p.title} — photograph 2`}
              loading="lazy"
              className={imageClass}
            />
          </div>

          {/* Third photograph */}
          <div
            className={cn(
              "relative min-h-0 overflow-hidden",
              reversed ? "col-start-1 row-start-2" : "col-start-2 row-start-2",
            )}
          >
            <img
              src={galleryImages[2]}
              alt={`${p.title} — photograph 3`}
              loading="lazy"
              className={imageClass}
            />
          </div>
        </div>
      ) : showGallery && galleryImages.length === 2 ? (
        <div className="grid aspect-[3/2] grid-cols-2 gap-2 overflow-hidden bg-muted">
          {galleryImages.map((src, i) => (
            <div key={`${src}-${i}`} className="min-h-0 overflow-hidden">
              <img
                src={src}
                alt={`${p.title} — photograph ${i + 1}`}
                loading="lazy"
                className={imageClass}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={cn("relative overflow-hidden bg-muted", ratios[p.ratio])}>
          <img src={p.cover} alt={`${p.title} — ${cat}`} loading="lazy" className={imageClass} />
        </div>
      )}

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          {index !== undefined && (
            <span className="eyebrow mr-3 text-ember">{String(index + 1).padStart(2, "0")}</span>
          )}
          <h3 className="display inline text-3xl transition-colors md:text-4xl">{p.title}</h3>
          <p className="eyebrow mt-2 text-muted-foreground">
            {cat} · {p.year}
          </p>
        </div>

        <span className="eyebrow shrink-0 transition-all duration-500 md:translate-x-[-6px] md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100">
          View →
        </span>
      </div>
    </Link>
  );
}
