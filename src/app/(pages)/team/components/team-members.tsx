"use client";

import Image from "next/image";

// Temporary placeholder data. Replace image with real headshots under /public/images/team/...
const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Aisha Rahman",
    designation: "Program Director",
    imageUrl: "/images/csag-logo-no-bg.png",
    testimonial:
      "Working with the community has been a deeply rewarding journey. Our programs focus on sustainable change, ensuring families thrive long after our direct involvement.",
  },
  {
    id: "2",
    name: "Rahul Sen",
    designation: "Field Coordinator",
    imageUrl: "/images/csag-logo-no-bg.png",
    testimonial:
      "Every field visit reminds me why we started—real people, real stories, and real impact. Collaboration is our superpower.",
  },
  {
    id: "3",
    name: "Mina Das",
    designation: "Communications Lead",
    imageUrl: "/images/csag-logo-no-bg.png",
    testimonial:
      "Telling authentic stories builds trust and amplifies the voices that matter most—the communities we serve.",
  },
  {
    id: "4",
    name: "Arif Khan",
    designation: "Monitoring & Evaluation",
    imageUrl: "/images/csag-logo-no-bg.png",
    testimonial:
      "Data helps us learn, adapt, and scale what works. Our goal is transparency and outcomes that stand up to scrutiny.",
  },
  {
    id: "5",
    name: "Sadia Noor",
    designation: "Volunteer Manager",
    imageUrl: "/images/csag-logo-no-bg.png",
    testimonial:
      "Volunteers are the heartbeat of our NGO. We invest in their growth so they can invest in the community.",
  },
  {
    id: "6",
    name: "Imran Hossain",
    designation: "Finance & Ops",
    imageUrl: "/images/csag-logo-no-bg.png",
    testimonial:
      "Responsible stewardship ensures every donation stretches further and creates measurable impact.",
  },
];

export default function TeamMembers() {
  return (
    <section
      id="team"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-csag-primary">Core Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto rounded-minimal"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            The passionate people driving our mission forward across Ghana.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {TEAM_MEMBERS.map((m) => (
            <article
              key={m.id}
              className="bg-white rounded-lg ring-1 ring-black/5 overflow-hidden hover:ring-2 hover:ring-csag-primary/20 transition-all duration-300"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <span className="absolute -inset-1 rounded-minimal bg-gradient-to-tr from-csag-primary/10 to-csag-accent/10 blur-sm"></span>
                  <div className="relative">
                    <Image
                      src={m.imageUrl}
                      alt={`${m.name} headshot`}
                      width={96}
                      height={96}
                      className="h-24 w-24 rounded-lg object-cover ring-2 ring-white"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {m.name}
                </h3>
                <p className="text-csag-primary font-medium mt-1">
                  {m.designation}
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed italic">
                  “{m.testimonial}”
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
