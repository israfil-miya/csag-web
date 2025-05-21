"use client";
import Link from "next/link";

export default function PartnerBanner() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('/images/photoshoot/watching-over-new-books.jpg')",
      }} // Replace with actual path
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
        <span className="inline-block bg-green-600 text-white font-semibold text-sm px-4 py-1 rounded mb-4">
          #WE NEED YOU HELP
        </span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Please join us to help rural children in Ghana to have a better life
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded transition duration-200"
          >
            DONATE NOW
          </Link>
          <Link
            href="/volunteer"
            className="border border-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded transition duration-200"
          >
            BECOME A VOLUNTEER
          </Link>
        </div>
      </div>
    </section>
  );
}
