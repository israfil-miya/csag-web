import Image from "next/image";

export default function WhatIsCSAG() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is <span className="text-csag-primary">CSAG</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Child Survival Aid Ghana (CSAG) is a non-profit NGO dedicated to
            enhancing educational opportunities for underprivileged children in
            rural Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-csag-accent">Story</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Since 2015, <strong>Child Survival Aid Ghana (CSAG)</strong> has
              been on a mission to bring hope and education to children in rural
              Ghana. We believe every child, no matter their background,
              deserves a chance to learn and grow. Through our work, we’ve seen
              how quality education opens doors and helps children reach their
              potential.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Education is more than books and classrooms. It unlocks better
              opportunities, stronger families, and personal freedom. It changes
              communities and shapes futures beyond the individual. Knowing
              this, we dedicate ourselves to helping children rise above
              poverty&apos;s challenges.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Every day, <strong>CSAG</strong> works to raise education
              standards and literacy in Ghana&apos;s rural areas. Our goal is to
              empower often-forgotten children with tools and confidence to
              build better lives. With wide support, we transform lives and help
              young dreamers climb toward a brighter tomorrow while contributing
              to sustainable development.
            </p>
          </div>
          <div
            className="order-1 lg:order-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative overflow-hidden">
              <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 bg-csag-primary/20 rounded-lg opacity-60"></div>
              <Image
                src="/images/photoshoot/everyone-hands-up.jpg"
                alt="CSAG team members working with children"
                className="w-full h-auto rounded-lg relative z-10 hover:translate-y-[-2px] transition-transform duration-300"
                width={600}
                height={400}
              />
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 bg-csag-accent/30 rounded-lg opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
