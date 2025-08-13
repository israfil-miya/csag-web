import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/images/csag-logo-no-bg.png"
                alt="CSAG Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <h4 className="text-xl font-bold text-csag-accent-light tracking-wide">
                CSAG
              </h4>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Child Survival Aid Ghana is a registered National Non-Profit
              Organization (Reg. No.DSW/1927) and a company limited by guarantee
              (Reg. No.CG048960623). Our Tax ID is No. COO63018292
            </p>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/csagchildghana"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                href="https://x.com/csagchild "
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/csagchildghana"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/@childsurvivalaidghana"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200 hover:scale-110 transform"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/child-survival-aid-ghana?originalSubdomain=gh "
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-csag-accent-light">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-csag-accent-light">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-csag-primary mt-1" />
                <span className="text-gray-300 leading-relaxed">
                  123 Education Street, Accra, Ghana
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-csag-primary mt-1" />
                <span className="text-gray-300">info@csaghana.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-csag-primary mt-1" />
                <span className="text-gray-300">+233 123 456 789</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-csag-accent-light">
              Newsletter
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Subscribe to our newsletter to receive updates on our work and
              impact.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-minimal bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-csag-primary focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full bg-csag-accent hover:bg-csag-accent-light text-white font-semibold py-3 px-6 rounded-minimal transition-all duration-200 hover:translate-y-[-1px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="py-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            © 2012-{new Date().getFullYear()} Child Survival Aid Ghana. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
