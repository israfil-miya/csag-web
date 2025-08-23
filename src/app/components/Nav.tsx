"use client";

import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

import { redirect, usePathname } from "next/navigation";

function NavLink(
  href: string,
  text: string,
  pathname: string,
  dropdown: boolean = false,
  onClick?: () => void
) {
  if (dropdown) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-csag-primary transition-all duration-200",
          pathname === href
            ? "underline underline-offset-4 decoration-2 decoration-csag-primary"
            : ""
        )}
      >
        {text} <ChevronDown size={16} />
      </button>
    );
  } else
    return (
      <Link
        href={href}
        className={cn(
          `hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-csag-primary transition-all duration-200`,
          pathname === href
            ? "underline underline-offset-4 decoration-2 decoration-csag-primary"
            : ""
        )}
      >
        {text}
      </Link>
    );
}

function Nav() {
  const pathname = usePathname();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [isInvolvedDropdownOpen, setIsInvolvedDropdownOpen] = useState(false);
  const involvedRef = useRef<HTMLDivElement | null>(null);

  // Close the About dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!isAboutDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsAboutDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isAboutDropdownOpen]);

  // Close the Get Involved dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!isInvolvedDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        involvedRef.current &&
        !involvedRef.current.contains(e.target as Node)
      ) {
        setIsInvolvedDropdownOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsInvolvedDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isInvolvedDropdownOpen]);

  return (
    <div className="flex items-center align-middle justify-between text-foreground p-4 px-6 bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div
        onClick={() => redirect("/")}
        className="flex cursor-pointer items-center space-x-4"
      >
        <Image
          src="/images/csag-logo-no-bg.png"
          alt="Logo"
          width={80}
          height={80}
          className="hover:scale-105 transition-transform duration-200"
        />
        <h2 className="text-2xl font-bold tracking-wide">
          <span className="md:block hidden uppercase font-sans">
            Child Survival Aid Ghana
          </span>
          <span className="md:hidden block">CSAG</span>
        </h2>
      </div>
      <div className="items-center text-lg gap-x-16 font-semibold xl:flex hidden">
        <nav className="space-x-8 flex flex-row items-center">
          {NavLink("/", "Home", pathname)}
          <div className="relative" ref={aboutRef}>
            {NavLink("/about", "About Us", pathname, true, () =>
              setIsAboutDropdownOpen((o) => !o)
            )}
            {isAboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-minimal border border-gray-100 py-2 z-50">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-csag-primary/10 hover:text-csag-primary transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Who We Are
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-csag-primary/10 hover:text-csag-primary transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Leadership & Team
                </Link>
              </div>
            )}
          </div>
          {NavLink("/our-projects", "Our Projects", pathname)}
          <div className="relative" ref={involvedRef}>
            {NavLink("/get-involved", "Get Involved", pathname, true, () =>
              setIsInvolvedDropdownOpen((o) => !o)
            )}
            {isInvolvedDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-minimal border border-gray-100 py-2 z-50">
                <Link
                  href="/partnership"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-csag-primary/10 hover:text-csag-primary transition-colors"
                  onClick={() => setIsInvolvedDropdownOpen(false)}
                >
                  Become a Partner
                </Link>
                <Link
                  href="/donate"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-csag-primary/10 hover:text-csag-primary transition-colors"
                  onClick={() => setIsInvolvedDropdownOpen(false)}
                >
                  Donate
                </Link>
                <Link
                  href="/volunteer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-csag-primary/10 hover:text-csag-primary transition-colors"
                  onClick={() => setIsInvolvedDropdownOpen(false)}
                >
                  Volunteer & Join Us
                </Link>
              </div>
            )}
          </div>
          {NavLink("/blog", "Blog & News", pathname)}
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="/donate"
            className="bg-csag-accent hover:bg-csag-accent-light text-white px-8 py-3 uppercase font-sans tracking-wide rounded-minimal duration-200 ease-in-out cursor-pointer font-bold transition-all hover:translate-y-[-1px]"
          >
            DONATE
          </Link>
        </div>
      </div>
      <div className="xl:hidden flex items-center justify-between">
        <button
          type="button"
          className="inline-flex hover:cursor-pointer items-center text-sm p-2 text-gray-500 rounded-minimal hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-csag-primary transition-all duration-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <Menu size={32} />
        </button>
      </div>
    </div>
  );
}

export default Nav;
