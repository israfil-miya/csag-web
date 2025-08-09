import { BookOpen, Eye, Heart } from "lucide-react";

export default function MissionVisionValues() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-csag-primary/5 to-csag-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-csag-primary">Mission</span>, Vision &
            Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            The guiding principles that drive our work and shape our impact in
            communities across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg border border-gray-100 text-center hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px] animate-slide-up">
            <div className="bg-csag-primary/10 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="h-10 w-10 text-csag-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide free access to education and essential learning
              resources for underprivileged girls and boys in rural communities
              of Ghana, empowering them to excel through education and break the
              cycle of poverty.
            </p>
          </div>

          {/* Vision */}
          <div
            className="bg-white p-8 rounded-lg border border-gray-100 text-center hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px] animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-csag-accent/10 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
              <Eye className="h-10 w-10 text-csag-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A Ghana where every child, regardless of their background or
              location, has access to quality education and the opportunity to
              reach their full potential, creating a brighter future for
              generations to come.
            </p>
          </div>

          {/* Values */}
          <div
            className="bg-white p-8 rounded-lg border border-gray-100 text-center hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px] animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-gradient-to-br from-csag-primary/10 to-csag-accent/10 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
              <Heart className="h-10 w-10 text-csag-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-2">
              <p>
                <strong>Equity:</strong> Every child deserves equal
                opportunities
              </p>
              <p>
                <strong>Community:</strong> We work with and for local
                communities
              </p>
              <p>
                <strong>Sustainability:</strong> Creating lasting, positive
                change
              </p>
              <p>
                <strong>Excellence:</strong> Striving for the highest quality in
                all we do
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
