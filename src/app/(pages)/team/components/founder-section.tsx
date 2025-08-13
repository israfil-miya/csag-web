import Image from "next/image";

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-csag-primary">Founder</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            The visionary leader who started it all and continues to inspire our
            mission.
          </p>
        </div>

        <div className="bg-white rounded-lg overflow-hidden animate-slide-up">
          <div className="lg:flex">
            <div className="lg:w-1/3">
              <div className="relative h-96 lg:h-full">
                <Image
                  src="/images/emmanuel_adika_benedict.jpeg"
                  alt="CSAG Founder"
                  className="w-full h-full object-cover"
                  width={400}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-2/3 p-8 lg:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Mr.{" "}
                  <span className="text-csag-accent">
                    Emmanuel Adika Benedict
                  </span>
                </h3>
                <p className="text-xl text-csag-primary font-semibold">
                  Founder & Executive Director
                </p>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Emmanuel Adika Benedict founded Child Survival Aid Ghana in
                  2005 with a simple yet powerful vision: to ensure that every
                  child in rural Ghana has access to quality education,
                  regardless of their economic circumstances.
                </p>

                <p>
                  Born and raised in a rural village in Ghana, Emmanuel Adika
                  Benedict experienced firsthand the challenges that children
                  face when educational opportunities are limited. After
                  completing his education and working in international
                  development, he returned to Ghana with a mission to create
                  lasting change.
                </p>

                <p>
                  &ldquo;Education is the most powerful weapon which you can use
                  to change the world,&rdquo; says Emmanuel Adika Benedict.
                  &ldquo;When I see the smiles on children&apos;s faces as they
                  receive their first books or enter a newly built classroom, I
                  know we&apos;re making a real difference.&rdquo;
                </p>

                <p>
                  Under Emmanuel Adika Benedict&apos;s leadership, CSAG has
                  grown from a small community initiative to an organization
                  that has impacted hundreds of thousands of lives across Ghana.
                  His dedication to educational equity and community development
                  continues to inspire our work every day.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-csag-primary">
                      18+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years of Service
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-csag-primary">
                      875K+
                    </div>
                    <div className="text-sm text-gray-600">Children Helped</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-csag-primary">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">
                      Communities Served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
