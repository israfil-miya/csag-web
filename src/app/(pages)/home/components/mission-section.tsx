import { ArrowRight, BookOpen, Building2, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MissionSection() {
  return (
    <div className="py-20 px-4 md:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We believe education is the most powerful tool to break the cycle of
            poverty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-background p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Empower</h3>
            <p className="text-muted-foreground">
              Empowering underprivileged children in rural Ghana through access
              to quality education and resources they need to succeed.
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="bg-secondary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <BookOpen className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Educate</h3>
            <p className="text-muted-foreground">
              Providing learning resources, training local educators, and
              building school infrastructure to create effective learning
              environments.
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="bg-accent/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Transform
            </h3>
            <p className="text-muted-foreground">
              Breaking the cycle of poverty and paving the way for a brighter,
              more equal future for communities across Ghana.
            </p>
          </div>
        </div>

        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Approach
              </h3>
              <p className="text-muted-foreground mb-4">
                We believe education is the most powerful tool to break the
                cycle of poverty, and we work tirelessly to provide learning
                resources, train local educators, build school infrastructure,
                and foster community support.
              </p>
              <p className="text-muted-foreground mb-6">
                By equipping children with knowledge and opportunity, we pave
                the way for a brighter, more equal future — one child at a time.
              </p>
              <Link
                href="/approach"
                className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
              >
                Learn more about our approach
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/photoshoot/IMG_20230425_115805_MP.jpg"
                alt="Children in a classroom"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
