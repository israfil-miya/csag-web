"use client";

import "flowbite";
import { initFlowbite } from "flowbite";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function About() {
  // Use useEffect to safely initialize flowbite on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      initFlowbite();
    }
  }, []);

  return (
    <>
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

      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full max-w-2xl p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-gray-600">
            We are a team of passionate developers dedicated to creating amazing
            web applications.
          </p>
          <Image
            src="/images/about.jpg"
            alt="About Us"
            width={500}
            height={300}
            className="mt-4 rounded-lg"
          />
          <Link href="/contact" className="mt-4 btn btn-primary">
            Contact Us <MoveRight />
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
