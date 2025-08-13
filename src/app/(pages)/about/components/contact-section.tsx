import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-csag-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Have questions about our work? Want to get involved? We&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Contact <span className="text-csag-accent">Information</span>
            </h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-csag-primary/10 p-3 rounded-lg mr-4 shrink-0">
                  <MapPin className="h-6 w-6 text-csag-primary" />
                </div>
                <div className="w-full">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Our Address
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    Child Survival Aid Ghana, 123 Education Street, Accra, Ghana
                  </p>
                  <div
                    className="relative w-full overflow-hidden rounded-minimal border border-gray-200 bg-gray-100"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <iframe
                      title="Map showing the location of Child Survival Aid Ghana"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5636077865497!2d-0.14485172414709938!3d5.631244732886693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf856759d013d7%3A0x6c60a00554b0741d!2sChild%20Survival%20Aid%20Ghana!5e0!3m2!1sen!2sbd!4v1755031649880!5m2!1sen!2sbd"
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    <a
                      href="https://maps.google.com/?q=Child+Survival+Aid+Ghana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-csag-primary"
                    >
                      Open in Google Maps
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-csag-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-csag-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@csaghana.org"
                      className="hover:text-csag-primary transition-colors"
                    >
                      info@csaghana.org
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a
                      href="mailto:support@csaghana.org"
                      className="hover:text-csag-primary transition-colors"
                    >
                      support@csaghana.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-csag-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-csag-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                  <p className="text-gray-600">
                    <a
                      href="tel:+233123456789"
                      className="hover:text-csag-primary transition-colors"
                    >
                      +233 123 456 789
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a
                      href="tel:+233987654321"
                      className="hover:text-csag-primary transition-colors"
                    >
                      +233 987 654 321
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-csag-primary/10 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-csag-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Office Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 3:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Send us a <span className="text-csag-accent">Message</span>
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-csag-primary focus:border-transparent transition-all duration-200"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-csag-primary focus:border-transparent transition-all duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-csag-primary focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-csag-primary focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="donation">Donation Question</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-csag-primary focus:border-transparent transition-all duration-200"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-csag-accent hover:bg-csag-accent-light text-white font-semibold py-4 px-8 rounded-minimal transition-all duration-300 hover:translate-y-[-2px] flex items-center justify-center group"
              >
                Send Message
                <Send className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
