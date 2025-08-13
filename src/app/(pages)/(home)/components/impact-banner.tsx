import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ImpactBanner() {
  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-r from-csag-primary to-csag-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-csag-accent rounded-lg -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-csag-accent-light rounded-lg translate-x-12 translate-y-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            IMPACT WE <span className="text-csag-accent-light">MADE</span>
          </h2>
          <div className="w-24 h-1 bg-csag-accent-light mx-auto mb-8 rounded-minimal"></div>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-95">
            Through your support, we&apos;ve been able to make a significant
            difference in the lives of children and communities across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up">
            <div className="text-5xl md:text-6xl font-bold mb-4 text-csag-accent-light">
              150,000+
            </div>
            <p className="uppercase text-sm tracking-wider font-medium text-white">
              Children reached through our educational programs
            </p>
          </div>

          <div
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-4 text-csag-accent-light">
              40+
            </div>
            <p className="uppercase text-sm tracking-wider font-medium text-white">
              Schools supported through construction
            </p>
          </div>

          <div
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-4 text-csag-accent-light">
              50,700+
            </div>
            <p className="uppercase text-sm tracking-wider font-medium text-white">
              Adults empowered through skills training
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href=""
            className="inline-flex items-center bg-csag-accent-light text-white font-semibold px-8 py-3 rounded-minimal hover:bg-csag-accent transition-all duration-300 hover:translate-y-[-2px] group"
          >
            View our impact report
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
