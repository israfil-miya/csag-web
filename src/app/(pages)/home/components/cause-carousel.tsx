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
    <div className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Causes
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Support our ongoing initiatives to improve education and create
            opportunities for children in Ghana.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Slides */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {causes.map((cause) => (
                <div
                  key={cause.id}
                  className="min-w-full bg-background rounded-lg overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="inline-block bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary rounded mb-4">
                        FUNDRAISING
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {cause.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {cause.description}
                      </p>

                      {/* Progress Stats */}
                      <div className="mb-4">
                        <div className="text-4xl font-bold text-foreground mb-2">
                          {getProgressPercentage(cause.raised, cause.goal)}%
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5 mb-2">
                          <div
                            className="bg-secondary h-2.5 rounded-full"
                            style={{
                              width: `${getProgressPercentage(
                                cause.raised,
                                cause.goal
                              )}%`,
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <div className="text-primary font-medium">
                            Raised: ${cause.raised.toLocaleString()}
                          </div>
                          <div className="text-muted-foreground">
                            Goal: ${cause.goal.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {/* Donate Button */}
                      <Link
                        href="/donate"
                        className="mt-4 inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-6 rounded shadow transition duration-200"
                      >
                        DONATE NOW
                      </Link>
                    </div>

                    <div className="md:w-1/3">
                      <div className="h-full relative">
                        <Image
                          src={cause.image || "/placeholder.svg"}
                          alt={`${cause.title} campaign image`}
                          className="w-full h-full object-cover"
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
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-background hover:bg-muted text-foreground rounded-full p-2 shadow-md z-10 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-background hover:bg-muted text-foreground rounded-full p-2 shadow-md z-10 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {causes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-secondary" : "w-2 bg-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/causes"
            className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
          >
            View all causes
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
