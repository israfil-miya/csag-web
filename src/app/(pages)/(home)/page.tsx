"use client";

import "flowbite";
import { initFlowbite } from "flowbite";
import { Menu } from "lucide-react";
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
            <Link href="/" className=" hover:underline *:underline-offset-6">
              Home
            </Link>
            <a href="/about" className="hover:underline *:underline-offset-6">
              About Us
            </a>
            <a href="/contact" className="hover:underline *:underline-offset-6">
              Our Work 👇
            </a>
            <a href="/join" className="hover:underline *:underline-offset-6">
              Get Involved 👇
            </a>
            <a href="/blogs" className="hover:underline *:underline-offset-6">
              News & Blogs
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-accent px-6 py-2 uppercase font-sans tracking-wide rounded-md duration-200 ease-in-out cursor-pointer font-medium text-gray-100 shadow-lg transition-colors hover:bg-amber-600 focus:bg-amber-600">
              DONATE
            </button>
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
      <div className="relative flex items-end pb-24 px-10 justify-start min-h-[70vh] xl:min-h-[80vh] bg-gray-900 overflow-hidden">
        <Image
          src="/images/photoshoot/reading-book-in-library.JPG"
          alt="Background library scene"
          fill
          className="object-cover object-center scale-x-[-1]"
          priority
        />

        {/* Fixed gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        {/* Content container */}
        <div className="relative z-10 max-w-4xl text-left px-4 sm:px-6 text-wrap w-lg lg:w-1/2">
          <h1 className="text-4xl uppercase md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6 drop-shadow-lg">
            Make a Difference Through Education
          </h1>
          <Link
            href=""
            className="inline-flex font-sans tracking-wide items-center uppercase justify-center rounded-md bg-accent px-5 py-2.5 text-lg font-medium text-gray-100 shadow-lg transition-colors hover:bg-amber-600 focus:bg-amber-600 duration-200 ease-in-out cursor-pointer"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
