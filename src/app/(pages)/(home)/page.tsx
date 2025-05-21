"use client";

import "flowbite";
import { initFlowbite } from "flowbite";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function Home() {
  // Use useEffect to safely initialize flowbite on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      initFlowbite();
    }
  }, []);

  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative flex items-end pb-24 px-10 justify-start min-h-[70vh] xl:min-h-[70vh] text-gray-800 overflow-hidden">
        <Image
          src="/images/photoshoot/reading-book-in-library.JPG"
          alt="Background library scene"
          fill
          className="object-cover object-center scale-x-[-1]"
          priority
        />

        {/* Fixed gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        {/* Content container */}
        <div className="relative z-10 max-w-4xl text-left px-4 sm:px-6 text-wrap w-lg lg:w-1/2">
          <h1 className="text-4xl uppercase md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6 drop-shadow-lg">
            Make a Difference Through Education
          </h1>
          <Link
            href=""
            className="inline-flex font-sans tracking-wide items-center uppercase justify-center rounded-md bg-accent px-5 py-2.5 text-lg font-medium text-gray-100 shadow-lg transition-colors hover:bg-yellow-400 focus:bg-yellow-400 hover:text-gray-800 focus:text-gray-800 duration-200 ease-in-out cursor-pointer"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="p-1 mt-16">
        <p className="leading-relaxed mb-4 text-lg container">
          <span className="text-lg font-bold text-accent font-sans">
            Child Survival Aid Ghana (CSAG)
          </span>{" "}
          is a non-profit organization empowering underprivileged children in
          rural Ghana through access to quality education. We believe education
          is the most powerful tool to break the cycle of poverty, and we work
          tirelessly to provide learning resources, train local educators, build
          school infrastructure, and foster community support. By equipping
          children with knowledge and opportunity, we pave the way for a
          brighter, more equal future — one child at a time.
        </p>
        <span className="leading-relaxed text-lg text-center flex align-middle justify-center">
          <Link
            href={"/about"}
            className="text-accent hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent text-center flex gap-1 items-center font-semibold"
          >
            Find more about CSAG <MoveRight size={16} />
          </Link>
        </span>
      </div>

      {/* Impact banner */}
      <div className="flex flex-col border-y-2 border-slate-300 items-center justify-center bg-gray-100 text-gray-800 py-10 mt-16">
        <div className="container">
          <div className="text-center leading-snug">
            <h3 className="text-3xl  font-bold mb-2 uppercase tracking-wide">
              IMPACT WE MADE
            </h3>
            {/* <p className="text-md text-gray-200 tracking-wide">
            Together, we&apos;ve helped build brighter futures for children
            across Ghana
          </p> */}
          </div>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            {/* Stat 1 */}
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-accent mb-3 hover:underline hover:underline-offset-4 hover:decoration-6 hover:decoration-accent">
                875,000+
              </p>
              <p className="text-sm md:text-lg uppercase tracking-wide font-mono">
                Children reached through our educational programs and healthcare
                initiatives
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-accent mb-3 hover:underline hover:underline-offset-4 hover:decoration-6 hover:decoration-accent">
                600+
              </p>
              <p className="text-sm md:text-lg uppercase tracking-wide font-mono">
                Schools supported through construction, renovation, and learning
                resources
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-accent mb-3 hover:underline hover:underline-offset-4 hover:decoration-6 hover:decoration-accent">
                156,700+
              </p>
              <p className="text-sm md:text-lg uppercase tracking-wide font-mono">
                Adults empowered through skills development and community
                programs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Works Section (in cards) */}
      <div className="p-1 mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center uppercase tracking-wide">
          A Glance at Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container">
          {/* Card 1 */}
          <div className="overflow-hidden">
            <Image
              src="/images/photoshoot/boy-filled-with-joy.jpg"
              alt="Card Image"
              width={500}
              height={300}
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <div className="pt-4">
              <h3 className="text-xl capitalize font-semibold mb-1">
                Child Education
              </h3>
              <p className="text-gray-700 mb-2">
                Last year, your support helped over 3,000 children in rural
                Ghana access quality education, learning materials, and
                mentorship.
              </p>
              <Link
                href="/sponsor-a-child"
                className="text-accent flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent font-semibold"
              >
                Sponsor a child today <MoveRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden">
            <Image
              src="/images/photoshoot/computer-lab.JPG"
              alt="Card Image"
              width={500}
              height={300}
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <div className="pt-4">
              <h3 className="text-xl capitalize font-semibold mb-1">
                Digital Learning Access
              </h3>
              <p className="text-gray-700 mb-2">
                In 2024, we equipped 5 rural schools with computer labs, opening
                the door to digital education for 1,200 students.
              </p>
              <Link
                href="/healthcare"
                className="text-accent flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent font-semibold"
              >
                Learn more <MoveRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden">
            <Image
              src="/images/photoshoot/teachers-teaching-in-class.jpg"
              alt="Card Image"
              width={500}
              height={300}
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <div className="pt-4">
              <h3 className="text-xl capitalize font-semibold mb-1">
                Empowering Educators
              </h3>
              <p className="text-gray-700 mb-2">
                We trained 150 rural teachers in modern, inclusive teaching
                practices, impacting thousands of young learners.
              </p>
              <Link
                href="/healthcare"
                className="text-accent flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent font-semibold"
              >
                Learn more <MoveRight size={16} />
              </Link>
            </div>
          </div>
        </div>
        <span className="leading-relaxed text-lg mt-6 text-center flex align-middle justify-center">
          <Link
            href={"/about"}
            className="text-accent hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent text-center flex gap-1 items-center font-semibold"
          >
            Explore more about our work <MoveRight size={16} />
          </Link>
        </span>
      </div>

      {/* devider */}
      <div className="flex justify-center items-center mt-16">
        <div className="w-full h-[2px] bg-gray-300" />
      </div>

      {/* ongoing campaigns */}

      <div className="flex flex-col border-y-2 border-slate-300 items-center justify-center bg-gray-100 text-gray-800 py-10 mt-16">
        <div className="container">
          <div className="text-center leading-snug">
            <h3 className="text-3xl  font-bold mb-2 uppercase tracking-wide">
              Ongoing Campaigns
            </h3>
            {/* <p className="text-md text-gray-200 tracking-wide">
            Together, we&apos;ve helped build brighter futures for children
            across Ghana
          </p> */}
          </div>
          {/* campaign card */}
        </div>
      </div>

      {/* Featured Partner */}
      <div className="flex flex-col mt-16 text-gray-800 w-full">
        <div className="text-center leading-snug">
          <h3 className="text-3xl font-bold mb-2 uppercase tracking-wide">
            Featured Partner
          </h3>
          <p className="text-md text-gray-700 tracking-wide px-4">
            Together, we&apos;ve helped build brighter futures for children
            across Ghana
          </p>
        </div>
        {/* Partner Logo */}
        <div className="flex flex-col sm:flex-row mt-2 items-start container">
          <Image
            src="/images/partners/Gov_IntDev_Std_Colour.jpg"
            alt="Partner Logo"
            width={300}
            height={200}
            className="mt-4"
          />
          {/* Partner Description */}
          <div className="text-left text-gray-700 pt-12 w-ful">
            <h3 className="text-xl text-accent font-bold mb-2 uppercase tracking-wide">
              Government of Ireland
            </h3>
            <p className="text-md text-gray-700 tracking-wide">
              We are proud to partner with the Government of Ireland, whose
              support has been instrumental in our mission to provide quality
              education and healthcare to children in Ghana. Their commitment to
              global development aligns with our vision of a world where every
              child has the opportunity to grow, learn, and prosper. Through
              this invaluable collaboration, we are implementing innovative
              projects that enhance local educational systems, fortify community
              healthcare, and create sustainable economic opportunities. By
              working together, we are not only bridging the opportunity gap but
              also empowering communities to build a resilient and promising
              future for the generations to come.
            </p>
            <p className="mt-4 inline-block">
              <Link
                href="/partners"
                className="text-accent hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent font-semibold"
              >
                <span className="flex gap-1 items-center">
                  Explore our partners <MoveRight size={16} />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
