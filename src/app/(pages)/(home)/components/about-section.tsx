import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-csag-primary">CSAG</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Learn about our organization and how we're making a difference in
            the lives of children across Ghana through innovative educational
            programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Who We <span className="text-csag-accent">Are</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Child Survival Aid Ghana (CSAG) is a non-profit organization
              empowering underprivileged children in rural Ghana through access
              to quality education. Founded in 2005, we have grown from a small
              community initiative to an organization that has impacted hundreds
              of thousands of lives.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Our team consists of dedicated educators, community organizers,
              and volunteers who are passionate about creating equal
              opportunities for all children, regardless of their background or
              circumstances.
            </p>
            <div className="flex flex-wrap gap-6 mt-10">
              <Link
                href="/team"
                className="inline-flex items-center text-csag-primary font-semibold hover:text-csag-primary-dark transition-colors group"
              >
                Meet our team
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/history"
                className="inline-flex items-center text-csag-accent font-semibold hover:text-csag-accent-dark transition-colors group"
              >
                Our history
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div
            className="order-1 lg:order-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-csag-primary/20 rounded-lg opacity-60"></div>
              <Image
                src="/images/photoshoot/everyone-hands-up.jpg"
                alt="CSAG team members working with children"
                className="w-full h-auto rounded-lg relative z-10 hover:translate-y-[-2px] transition-transform duration-300"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-csag-accent/30 rounded-lg opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
