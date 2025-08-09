import Image from "next/image";

export default function WhatIsCSAG() {
  return (
    <section
      id="our-story"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is <span className="text-csag-primary">CSAG</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Child Survival Aid Ghana (CSAG) is a non-profit organization
            dedicated to breaking the cycle of poverty through education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-csag-accent">Story</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Founded in 2005, CSAG began as a small community initiative in
              rural Ghana. What started as a simple mission to provide basic
              educational resources to underprivileged children has grown into a
              comprehensive organization that has impacted hundreds of thousands
              of lives across the country.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              We believe that every child, regardless of their background or
              circumstances, deserves access to quality education. Our work
              focuses on rural communities where educational opportunities are
              limited, and where the cycle of poverty is most entrenched.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Through innovative programs, community partnerships, and the
              dedication of our team and volunteers, we're creating lasting
              change in communities across Ghana. We're not just building
              schools – we're building futures.
            </p>
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
    </section>
  );
}
