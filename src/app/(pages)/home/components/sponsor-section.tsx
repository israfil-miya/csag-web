import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SponsorSection() {
  return (
    <div className="pb-20 px-4 md:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Sponsors
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We're grateful to our partners and sponsors who make our work
            possible.
          </p>
        </div>

        {/* Featured Sponsor */}
        <div className="bg-background rounded-lg shadow-md p-8 md:p-10 mb-16">
          <div className="md:flex items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="bg-muted p-6 rounded-lg">
                <img
                  src="/images/partners/Gov_IntDev_Std_Colour.jpg"
                  alt="Featured sponsor logo"
                  className="h-20 w-auto mx-auto"
                  width={200}
                  height={120}
                />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Government of Ireland
              </h3>
              <p className="text-muted-foreground mb-6">
                We are proud to partner with the Government of Ireland, whose
                support has been instrumental in our mission to provide quality
                education and healthcare to children in Ghana. Their commitment
                to global development aligns with our vision of a world where
                every child has the opportunity to grow, learn, and prosper.
                Through this invaluable collaboration, we are implementing
                innovative projects that enhance local educational systems,
                fortify community healthcare, and create sustainable economic
                opportunities. By working together, we are not only bridging the
                opportunity gap but also empowering communities to build a
                resilient and promising future for the generations to come.
              </p>
              <Link
                href="/partners/global-education-fund"
                className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
              >
                Learn more about our partnership
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Sponsor Logos */}

        {/* <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              Our Trusted Partners
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
              <img
                src="/images/partners/AustralianAidLogo.webp"
                alt="Partner 1"
                className="h-16 mx-auto grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
              <img
                src="/images/partners/AustralianAidLogo.webp"
                alt="Partner 2"
                className="h-16 mx-auto grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
              <img
                src="/images/partners/AustralianAidLogo.webp"
                alt="Partner 3"
                className="h-16 mx-auto grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
              <img
                src="/images/partners/AustralianAidLogo.webp"
                alt="Partner 4"
                className="h-16 mx-auto grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
              <img
                src="/images/partners/AustralianAidLogo.webp"
                alt="Partner 5"
                className="h-16 mx-auto grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
              <img
                src="/images/partners/AustralianAidLogo.webp"
                alt="Partner 6"
                className="h-16 mx-auto grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
              <img
                src="/images/partners/AustralianAidLogo.webp"
                alt="Partner 7"
                className="h-16 mx-auto grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
              <img
                src="/images/partners/AustralianAidLogo.webp"
                alt="Partner 8"
                className="h-16 mx-auto grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          </div>
        </section> */}
        {/* 
        <div>
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            Our Supporters
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-background p-6 rounded-lg shadow-sm flex items-center justify-center h-24"
              >
                <img
                  src={`/placeholder.svg?height=60&width=120&text=Sponsor ${
                    i + 1
                  }`}
                  alt={`Sponsor ${i + 1} logo`}
                  className="max-h-12 w-auto"
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
