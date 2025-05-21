import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OurWorkSection() {
  return (
    <div className="py-20 px-4 md:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Glance at Our Work
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our key initiatives that are making a difference in
            communities across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-background rounded-lg overflow-hidden shadow-md">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/photoshoot/IMG_20220926_104901_MP.jpg"
                alt="Children in a classroom"
                className="w-full h-full object-cover"
                width={400}
                height={224}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Child Education
              </h3>
              <p className="text-muted-foreground mb-4">
                Last year, your support helped over 3,000 children in rural
                Ghana access quality education, learning materials, and
                mentorship.
              </p>
              <Link
                href="/child-education"
                className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
              >
                Sponsor a child today
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-background rounded-lg overflow-hidden shadow-md">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/photoshoot/computer-lab.JPG"
                alt="Computer lab in a school"
                className="w-full h-full object-cover"
                width={400}
                height={224}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Digital Learning Access
              </h3>
              <p className="text-muted-foreground mb-4">
                In 2024, we equipped 5 rural schools with computer labs, opening
                the door to digital education for 1,200 students.
              </p>
              <Link
                href="/digital-learning"
                className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-background rounded-lg overflow-hidden shadow-md">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/photoshoot/teachers-teaching-in-class.jpg"
                alt="Teachers in a classroom"
                className="w-full h-full object-cover"
                width={400}
                height={224}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Empowering Educators
              </h3>
              <p className="text-muted-foreground mb-4">
                We trained 150 rural teachers in modern, inclusive teaching
                practices, impacting thousands of young learners.
              </p>
              <Link
                href="/empowering-educators"
                className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/our-work"
            className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
          >
            Explore more about our work
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
