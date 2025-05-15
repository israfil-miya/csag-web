import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import moment from "moment-timezone";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
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
  );
}

export default Footer;
