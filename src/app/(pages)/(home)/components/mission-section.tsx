import { ArrowRight, BookOpen, Building2, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MissionSection() {
  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-br from-csag-primary/5 to-csag-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-csag-primary">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We believe education is the most powerful tool to break the cycle of
            poverty and create lasting change in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg border border-gray-100 text-center hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px] animate-slide-up">
            <div className="bg-csag-primary/10 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
              <Building2 className="h-10 w-10 text-csag-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Empower</h3>
            <p className="text-gray-600 leading-relaxed">
              Empowering underprivileged children in rural Ghana through access
              to quality education and resources they need to succeed.
            </p>
          </div>

          <div
            className="bg-white p-8 rounded-lg border border-gray-100 text-center hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px] animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-csag-accent/10 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="h-10 w-10 text-csag-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Educate</h3>
            <p className="text-gray-600 leading-relaxed">
              Providing learning resources, training local educators, and
              building school infrastructure to create effective learning
              environments.
            </p>
          </div>

          <div
            className="bg-white p-8 rounded-lg border border-gray-100 text-center hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px] animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-gradient-to-br from-csag-primary/10 to-csag-accent/10 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
              <Globe className="h-10 w-10 text-csag-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform</h3>
            <p className="text-gray-600 leading-relaxed">
              Breaking the cycle of poverty and paving the way for a brighter,
              more equal future for communities across Ghana.
            </p>
          </div>
        </div>

        <div
          className="bg-white rounded-lg overflow-hidden animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="lg:flex">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-csag-accent">Approach</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                We believe education is the most powerful tool to break the
                cycle of poverty, and we work tirelessly to provide learning
                resources, train local educators, build school infrastructure,
                and foster community support.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                By equipping children with knowledge and opportunity, we pave
                the way for a brighter, more equal future — one child at a time.
              </p>
              <Link
                href="/approach"
                className="inline-flex items-center text-csag-primary font-semibold hover:text-csag-primary-dark transition-colors group"
              >
                Learn more about our approach
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/photoshoot/IMG_20230425_115805_MP.jpg"
                alt="Children in a classroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
