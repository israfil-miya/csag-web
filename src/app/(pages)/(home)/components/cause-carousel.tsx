"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Causes data
const causes = [
  {
    id: 1,
    title: "Classroom Supplies",
    description:
      "Supports classroom supplies for children, ensuring they have the basic tools they need to learn effectively.",
    image: "/images/photoshoot/IMG_20220720_102047.jpg",
    goal: 5000,
    raised: 3250,
  },
  {
    id: 2,
    title: "Community Library",
    description:
      "Supports the development of a community library, providing access to books and learning resources.",
    image: "/images/photoshoot/DSC_1011.JPG",
    goal: 12000,
    raised: 8750,
  },
  {
    id: 3,
    title: "Technology Initiative",
    description:
      "Supports a technology initiative, providing computers or laptops for students to access digital learning tools.",
    image: "/images/photoshoot/DSC_1073.JPG",
    goal: 15000,
    raised: 9800,
  },
];

export default function CauseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % causes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % causes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + causes.length) % causes.length);
  };

  // Calculate progress percentage
  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min(Math.round((raised / goal) * 100), 100);
  };

  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support Our <span className="text-csag-primary">Active Causes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            Every donation directly impacts the lives of children in Ghana.
            Choose a cause that resonates with you and help us create lasting
            change in education.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mt-8">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-csag-primary rounded-full mr-2"></div>
              <span>100% of donations go to the cause</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-csag-accent rounded-full mr-2"></div>
              <span>Monthly impact reports</span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Slides */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {causes.map((cause) => (
                <div
                  key={cause.id}
                  className="min-w-full bg-white rounded-lg overflow-hidden"
                >
                  <div className="lg:flex">
                    <div className="lg:w-2/3 p-8 lg:p-12">
                      <div className="inline-block bg-csag-accent/15 px-4 py-2 text-sm font-semibold text-csag-accent-dark rounded-minimal mb-6">
                        FUNDRAISING
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {cause.title}
                      </h3>
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        {cause.description}
                      </p>

                      {/* Progress Stats */}
                      <div className="mb-8">
                        <div className="text-5xl font-bold text-csag-primary mb-4">
                          {getProgressPercentage(cause.raised, cause.goal)}%
                        </div>
                        <div className="w-full bg-gray-200 rounded-minimal h-3 mb-4">
                          <div
                            className="bg-gradient-to-r from-csag-primary to-csag-accent h-3 rounded-minimal transition-all duration-500"
                            style={{
                              width: `${getProgressPercentage(
                                cause.raised,
                                cause.goal
                              )}%`,
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-base">
                          <div className="text-csag-primary font-semibold">
                            Raised: ${cause.raised.toLocaleString()}
                          </div>
                          <div className="text-gray-500">
                            Goal: ${cause.goal.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {/* Donate Button */}
                      <Link
                        href="/donate"
                        className="inline-block bg-csag-accent hover:bg-csag-accent-light text-white font-bold py-4 px-8 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
                      >
                        DONATE NOW
                      </Link>
                    </div>

                    <div className="lg:w-1/3">
                      <div className="h-full relative">
                        <Image
                          src={cause.image || "/placeholder.svg"}
                          alt={`${cause.title} campaign image`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-8 bg-white hover:bg-gray-50 text-csag-primary rounded-minimal p-3 z-10 transition-all duration-200 hover:translate-y-[-2px]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-8 bg-white hover:bg-gray-50 text-csag-primary rounded-minimal p-3 z-10 transition-all duration-200 hover:translate-y-[-2px]"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {causes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-minimal transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-gradient-to-r from-csag-primary to-csag-accent"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <Link
            href="/our-work"
            className="inline-flex items-center text-csag-primary font-semibold hover:text-csag-primary-dark transition-colors group"
          >
            Explore all active causes
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
