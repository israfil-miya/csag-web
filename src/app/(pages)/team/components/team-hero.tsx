import Image from "next/image";
import Link from "next/link";

export default function TeamHero() {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/photoshoot/teachers-teaching-in-class.jpg"
        alt="CSAG team members"
        className="w-full h-full object-cover"
        width={1920}
        height={600}
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-csag-primary/80 via-csag-primary/60 to-csag-accent/40 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Meet Our <span className="text-csag-accent-light">Team</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed opacity-95">
              Dedicated professionals committed to transforming education and
              creating opportunities for children across Ghana.
            </p>
            <div className="flex flex-wrap gap-6 animate-slide-up">
              <Link
                href="#founder"
                className="bg-csag-accent hover:bg-csag-accent-light text-white font-bold py-4 px-10 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
              >
                Meet Our Founder
              </Link>
              <Link
                href="#team"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-10 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
              >
                View All Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
