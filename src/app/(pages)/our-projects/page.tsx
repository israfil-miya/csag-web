import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./content/projects";

export const metadata = {
  title: "Our Projects | CSAG",
  description:
    "Browse completed and ongoing initiatives advancing learning outcomes in rural Ghana.",
};

export default function OurProjectPage() {
  // Ongoing projects first, then the rest by newest date
  const sorted = [...projects].sort((a, b) => {
    const pa = a.status === "Ongoing" ? 0 : 1;
    const pb = b.status === "Ongoing" ? 0 : 1;
    if (pa !== pb) return pa - pb;
    return b.date.localeCompare(a.date);
  });
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-csag-primary">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal" />
          <div className="max-w-4xl mx-auto space-y-8 text-left md:text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Through our dedicated efforts, we have made significant strides in
              improving educational outcomes for students in rural Ghana. Our
              initiatives continue to create lasting opportunities for brighter
              futures.
            </p>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {sorted.map((w, i) => (
            <article
              key={w.slug}
              className="py-10 first:pt-0 flex flex-col md:flex-row gap-8 md:items-start animate-slide-up"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="relative w-full md:w-72 aspect-[4/3] overflow-hidden rounded-minimal bg-gray-100 flex-shrink-0">
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  sizes="(max-width:768px) 100vw, 288px"
                  className="object-cover transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded-minimal bg-white/85 backdrop-blur-sm text-csag-primary">
                  {w.status}
                </span>
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug hover:underline underline-offset-4 decoration-2 decoration-csag-primary transition-colors">
                  <Link href={`/our-projects/${w.slug}`}>{w.title}</Link>
                </h2>
                <p className="text-sm text-gray-500 font-medium">
                  <time dateTime={w.date}>
                    {new Date(w.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span className="text-csag-accent/80">{w.sector}</span>
                </p>
                <p className="text-gray-700 leading-relaxed text-base max-w-2xl">
                  {w.excerpt}
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold tracking-wide text-gray-500">
                  {w.sponsor && (
                    <span className="inline-flex items-center gap-1">
                      <span className="text-gray-400">Sponsor:</span>
                      <span className="text-gray-700">{w.sponsor}</span>
                    </span>
                  )}
                  {w.partner && (
                    <span className="inline-flex items-center gap-1">
                      <span className="text-gray-400">Partner:</span>
                      <span className="text-gray-700">{w.partner}</span>
                    </span>
                  )}
                </div>

                <div>
                  <Link
                    href={`/our-projects/${w.slug}`}
                    className="inline-flex items-center text-csag-primary font-semibold text-sm hover:text-csag-primary-dark transition-colors group relative z-10 align-middle"
                  >
                    <p>Read more</p>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
