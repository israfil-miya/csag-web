"use client";

import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "../lib/utils";

import { usePathname } from "next/navigation";

function NavLink(
  href: string,
  text: string,
  pathname: string,
  dropdown: boolean = false
) {
  if (dropdown) {
    return (
      <span
        className={cn(
          "flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent",
          pathname === href
            ? "underline underline-offset-4 decoration-2 decoration-accent"
            : ""
        )}
      >
        {text} <ChevronDown size={16} />
      </span>
    );
  } else
    return (
      <Link
        href={href}
        className={cn(
          `hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent`,
          pathname === href
            ? "underline underline-offset-4 decoration-2 decoration-accent"
            : ""
        )}
      >
        {text}
      </Link>
    );
}

function Nav() {
  const pathname = usePathname();

  return (
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
          {NavLink("/", "Home", pathname)}
          {NavLink("/about", "About Us", pathname)}
          {NavLink("/volunteer", "Out Work", pathname, true)}
          {NavLink("/volunteer", "Get Involved", pathname, true)}
          {NavLink("/blogs", "News & Blogs", pathname)}
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
  );
}

export default Nav;
