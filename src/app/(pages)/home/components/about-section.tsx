import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About CSAG
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Learn about our organization and how we're making a difference in
            the lives of children across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Who We Are
            </h3>
            <p className="text-muted-foreground mb-4">
              Child Survival Aid Ghana (CSAG) is a non-profit organization
              empowering underprivileged children in rural Ghana through access
              to quality education. Founded in 2005, we have grown from a small
              community initiative to an organization that has impacted hundreds
              of thousands of lives.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team consists of dedicated educators, community organizers,
              and volunteers who are passionate about creating equal
              opportunities for all children, regardless of their background or
              circumstances.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/team"
                className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
              >
                Meet our team
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
              <Link
                href="/history"
                className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
              >
                Our history
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-lg opacity-20"></div>
              <Image
                src="/images/photoshoot/everyone-hands-up.jpg"
                alt="CSAG team members working with children"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
