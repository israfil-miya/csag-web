import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SponsorSection() {
  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-csag-primary">Sponsor</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We're grateful to our partners and sponsors who make our work
            possible through their generous support and commitment.
          </p>
        </div>

        {/* Featured Sponsor */}
        <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-slide-up">
          <div className="lg:flex items-center">
            <div className="lg:w-1/4 mb-8 lg:mb-0 flex justify-center">
              {/* <div className="bg-gray-50 p-8 rounded-lg"> */}
              <img
                className="h-36 w-auto mx-auto hover:scale-105 transition-transform duration-300"
                width={240}
                height={140}
                src="/images/partners/govt_of_ireland.jpg"
                alt="Featured sponsor logo"
              />
              {/* </div> */}
            </div>
            <div className="lg:w-3/4 lg:pl-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Government of <span className="text-csag-primary">Ireland</span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We are proud to partner with the Government of Ireland, whose
                support helps us provide quality education and healthcare to
                children in Ghana. Together, we implement projects that
                strengthen schools, improve community healthcare, and create
                sustainable opportunities, empowering communities to build a
                brighter future.
              </p>
              <Link
                href="/partners/govt-of-ireland"
                className="inline-flex items-center text-csag-primary font-semibold hover:text-csag-primary-dark transition-colors group"
              >
                Learn more about our partnership
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Partner Logos Grid */}
        {/* <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Our <span className="text-csag-primary">Supporters</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              {
                name: "Australian Aid",
                logo: "/images/partners/AustralianAidLogo.webp",
              },
              { name: "Biblionef", logo: "/images/partners/biblionef.png" },
              {
                name: "Bridge Africa",
                logo: "/images/partners/bridge-africa-logo-.png",
              },
              { name: "BFA", logo: "/images/partners/bfa-logo-2017.png" },
              { name: "DWG", logo: "/images/partners/dwglogo.jpg" },
              { name: "GOD", logo: "/images/partners/god-logo.png" },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-100 flex items-center justify-center h-32 hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px]"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  width={120}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
