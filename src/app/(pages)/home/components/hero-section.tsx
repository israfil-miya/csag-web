import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative h-[600px] md:h-[700px] bg-accent">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="/images/photoshoot/IMG_1039.jpg"
        alt="Children in a classroom"
        className="w-full h-full object-cover"
        width={1920}
        height={700}
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            MAKE A DIFFERENCE
            <br />
            THROUGH EDUCATION
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Empowering underprivileged children in rural Ghana through access to
            quality education.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded shadow transition duration-200"
            >
              DONATE NOW
            </Link>
            <Link
              href="/about"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded shadow transition duration-200"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
