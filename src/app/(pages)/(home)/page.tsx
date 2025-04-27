"use client";

import "flowbite";
import { initFlowbite } from "flowbite";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import moment from "moment-timezone";
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
      <div className="flex items-center align-middle justify-between text-foreground p-1 px-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/csag-logo-no-bg.png"
            alt="Logo"
            width={80}
            height={80}
          />
          <h2 className="text-2xl font-bold tracking-wide">
            <span className="md:block hidden uppercase font-sans">
              Child Survival Aid Ghana
            </span>
            <span className="md:hidden block">CSAG</span>
          </h2>
        </div>
        <div className="items-center text-lg gap-x-16 uppercase font-semibold xl:flex hidden">
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
        <span className="leading-relaxed text-lg mt-4 text-center flex align-middle justify-center">
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

      {/* Featured Partner */}
      <div className="flex flex-col mt-16 text-gray-800 w-full">
        <div className="text-center leading-snug">
          <h3 className="text-3xl font-bold mb-2 uppercase tracking-wide">
            Featured Partner
          </h3>
          <p className="text-md text-gray-700 tracking-wide">
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
            <Link
              href="/partners"
              className="text-accent flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent font-semibold mt-4"
            >
              Explore our partners <MoveRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}

      {/* Footer content - now with z-10 to appear above the background */}
      <div className="mt-16 bg-gray-900 text-gray-100 pt-8 px-4 shadow-lg z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <h1 className="text-2xl uppercase font-extrabold mb-4 text-gray-50">
              Child Survival Aid Ghana
            </h1>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>123 Main Street</p>
                <p>Accra</p>
                <p>Ghana</p>
                <p>P.O. Box 12345</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <p>T: +233 123 456 789</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <p>E: info@childsurvivalaid.org</p>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-bold text-gray-50 mb-4 lg:pt-1">
              SITEMAP
            </h3>
            <ul className="space-y-2 uppercase font-sans text-gray-200">
              <li>
                <Link
                  href="/about"
                  className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-gray-50 mb-4 lg:pt-1">
              CONNECT WITH US
            </h3>
            <div className="flex space-x-2 mb-6">
              <Link href="https://x.com/csagchild" aria-label="Twitter">
                <div className="bg-white rounded-full p-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                  <Twitter className="h-5 w-5 text-black stroke-2" />
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/csagchildghana"
                aria-label="Facebook"
              >
                <div className="bg-white rounded-full p-2">
                  <Facebook className="h-5 w-5 text-black stroke-2" />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/csagchildghana"
                aria-label="Instagram"
              >
                <div className="bg-white rounded-full p-2">
                  <Instagram className="h-5 w-5 text-black stroke-2" />
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@childsurvivalaidghana"
                aria-label="YouTube"
              >
                <div className="bg-white rounded-full p-2">
                  <Youtube className="h-5 w-5 text-black stroke-2" />
                </div>
              </Link>
            </div>

            <h3 className="text-xl font-bold text-gray-50 mb-4 lg:pt-2">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <div className="flex flex-row gap-2 items-center">
              <input
                type="text"
                placeholder="Full name*"
                className="bg-white text-black w-1/3 h-10 px-3 outline-none"
              />
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-mail*"
                  className="bg-white text-black h-10 px-3 outline-none"
                />
                <button
                  type="button"
                  className="bg-amber-500 hover:cursor-pointer hover:bg-amber-600 text-black h-10 px-4 font-medium"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 py-4 border-t border-gray-300 text-center">
          <p className="text-sm">
            © Copyright {moment().year()} Child Survival Aid Ghana (CSAG). All
            rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Nav;
