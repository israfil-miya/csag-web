"use client";

import "flowbite";
import { initFlowbite } from "flowbite";
import Image from "next/image";
import React, { useEffect } from "react";

function Nav() {
  // Use useEffect to safely initialize flowbite on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      initFlowbite();
    }
  }, []);

  return (
    <div className="flex items-center justify-between bg-foreground text-gray-100 p-1 px-10">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/csag-logo-no-bg.png"
          alt="Logo"
          width={80}
          height={80}
        />
        <h2 className="text-xl font-semibold">Child Survival Aid Ghana</h2>
      </div>
      <div className="actions flex items-center text-md gap-x-16">
        <nav className="space-x-6">
          <a href="/" className="hover:underline *:underline-offset-6">
            Home
          </a>
          <a href="/about" className="hover:underline *:underline-offset-6">
            About
          </a>
          <a href="/contact" className="hover:underline *:underline-offset-6">
            Contact
          </a>
          <a href="/join" className="hover:underline *:underline-offset-6">
            Join Us
          </a>
          <a href="/programs" className="hover:underline *:underline-offset-6">
            Programs
          </a>
          <a href="/blogs" className="hover:underline *:underline-offset-6">
            Blogs
          </a>
          <a href="/events" className="hover:underline *:underline-offset-6">
            Events
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-accent text-accent-foreground px-6 py-2 capitalize rounded hover:bg-accent/80 transition duration-200 ease-in-out cursor-pointer">
            DONATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
