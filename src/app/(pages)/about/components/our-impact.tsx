import { ArrowRight, BookOpen, Heart, School, Users } from "lucide-react";
import Link from "next/link";

export default function OurImpact() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-csag-primary to-csag-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-csag-accent rounded-lg -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-csag-accent-light rounded-lg translate-x-12 translate-y-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-csag-accent-light">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-csag-accent-light mx-auto mb-8 rounded-minimal"></div>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-95">
            Through your support, we've been able to make a significant
            difference in the lives of children and communities across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up">
            <div className="bg-csag-accent/20 w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-csag-accent-light" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-4 text-csag-accent-light">
              875,000+
            </div>
            <p className="uppercase text-sm tracking-wider font-medium text-white">
              Children reached through our educational programs
            </p>
          </div>

          <div
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-csag-accent/20 w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4">
              <School className="h-8 w-8 text-csag-accent-light" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-4 text-csag-accent-light">
              600+
            </div>
            <p className="uppercase text-sm tracking-wider font-medium text-white">
              Schools supported through construction and renovation
            </p>
          </div>

          <div
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-csag-accent/20 w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-csag-accent-light" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-4 text-csag-accent-light">
              156,700+
            </div>
            <p className="uppercase text-sm tracking-wider font-medium text-white">
              Adults empowered through skills training
            </p>
          </div>

          <div
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-csag-accent/20 w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-csag-accent-light" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-4 text-csag-accent-light">
              50+
            </div>
            <p className="uppercase text-sm tracking-wider font-medium text-white">
              Rural communities transformed
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/impact"
            className="inline-flex items-center bg-csag-accent-light text-white font-semibold px-8 py-3 rounded-minimal hover:bg-csag-accent transition-all duration-300 hover:translate-y-[-2px] group"
          >
            View our detailed impact report
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
