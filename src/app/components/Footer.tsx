import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About CSAG</h4>
            <p className="text-primary-foreground/70 mb-4">
              Child Survival Aid Ghana is a non-profit organization empowering
              underprivileged children through access to quality education.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-secondary" />
                <span className="text-primary-foreground/70">
                  123 Education Street, Accra, Ghana
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-secondary" />
                <span className="text-primary-foreground/70">
                  info@csaghana.org
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-secondary" />
                <span className="text-primary-foreground/70">
                  +233 123 456 789
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-primary-foreground/70 mb-4">
              Subscribe to our newsletter to receive updates on our work and
              impact.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium py-2 px-4 rounded transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="py-6 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-sm">
          <p>
            © {new Date().getFullYear()} Child Survival Aid Ghana. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
