import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ImpactBanner() {
  return (
    <div className="py-20 px-4 md:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            IMPACT WE MADE
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-primary-foreground/80">
            Through your support, we've been able to make a significant
            difference in the lives of children and communities across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="text-5xl md:text-6xl font-bold mb-4">875,000+</div>
            <p className="uppercase text-sm tracking-wider font-medium">
              Children reached through our educational programs
            </p>
          </div>

          <div className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="text-5xl md:text-6xl font-bold mb-4">600+</div>
            <p className="uppercase text-sm tracking-wider font-medium">
              Schools supported through construction
            </p>
          </div>

          <div className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="text-5xl md:text-6xl font-bold mb-4">156,700+</div>
            <p className="uppercase text-sm tracking-wider font-medium">
              Adults empowered through skills training
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/impact"
            className="inline-flex items-center text-primary-foreground font-medium hover:text-gray-200 transition-colors"
          >
            View our impact report
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
