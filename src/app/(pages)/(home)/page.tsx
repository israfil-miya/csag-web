"use client";

import "flowbite";
import { initFlowbite } from "flowbite";
import { ChevronDown, Menu, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function Nav() {
  // Use useEffect to safely initialize flowbite on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      initFlowbite();
    }
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center align-middle justify-between bg-background text-foreground p-1 px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/csag-logo-no-bg.png"
            alt="Logo"
            width={80}
            height={80}
          />
          <h2 className="text-xl font-bold tracking-wide">
            <span className="md:block hidden uppercase font-sans">
              Child Survival Aid Ghana
            </span>
            <span className="md:hidden block">CSAG</span>
          </h2>
        </div>
        <div className="items-center text-md gap-x-16 uppercase font-semibold xl:flex hidden">
          <nav className="space-x-5 flex flex-row items-center">
            <Link
              href="/"
              className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent"
            >
              Our Work <ChevronDown size={16} />
            </Link>
            <Link
              href="/join"
              className="flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent"
            >
              Get Involved <ChevronDown size={16} />
            </Link>
            <Link
              href="/blogs"
              className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent"
            >
              News & Blogs
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href=""
              className="bg-accent px-6 py-2 uppercase font-sans tracking-wide rounded-md duration-200 ease-in-out cursor-pointer font-medium text-gray-100 shadow-lg transition-colors hover:text-gray-800 focus:text-gray-800 hover:bg-yellow-400 focus:bg-yellow-400"
            >
              DONATE
            </Link>
          </div>
        </div>
        <div className="xl:hidden flex items-center justify-between">
          <button
            // data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex hover:cursor-pointer items-center text-sm p-1 text-gray-500 rounded-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative flex items-end pb-24 px-10 justify-start min-h-[70vh] xl:min-h-[70vh] bg-gray-900 overflow-hidden">
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
      <div className="p-1 px-8 md:px-16 lg:px-24 xl:px-32 mt-10">
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
      <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 py-10 px-8 md:px-16 lg:px-24 xl:px-32 mt-10">
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
              Adults empowered through skills development and community programs
            </p>
          </div>
        </div>
      </div>

      {/* Footer (temp) */}
      <footer className="bg-gray-900 text-gray-100 py-8 px-8 md:px-16 lg:px-24 xl:px-32 mt-10">
        <div className="text-center">
          <p className="text-sm md:text-md font-semibold tracking-wide">
            &copy; {new Date().getFullYear()} Child Survival Aid Ghana. All
            rights reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <Link
            href="/privacy"
            className="text-sm text-gray-400 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-gray-400 hover:underline">
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-400 hover:underline"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <Link
            href="/facebook"
            className="text-sm text-gray-400 hover:underline"
          >
            Facebook
          </Link>
          <Link
            href="/twitter"
            className="text-sm text-gray-400 hover:underline"
          >
            Twitter
          </Link>
          <Link
            href="/instagram"
            className="text-sm text-gray-400 hover:underline"
          >
            Instagram
          </Link>
          <Link
            href="/linkedin"
            className="text-sm text-gray-400 hover:underline"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Nav;
