// Centralized content definitions for About page sections
// This allows potential future CMS integration by replacing these arrays.

import {
  BookOpen,
  Globe2,
  Handshake,
  Heart,
  Layers,
  School,
  Users,
} from "lucide-react";

export interface IconEntry {
  title: string;
  text: string;
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

export const mission =
  "We provide free access to education and essential learning resources for underprivileged girls and boys in rural Ghana, empowering them to excel.";

export const vision =
  "Every girl and boy, no matter where they live, has equal opportunity to learn, rise above poverty, and contribute to a fair, thriving society.";

export const goals: IconEntry[] = [
  {
    title: "Access to Quality Education",
    text: "Remove barriers so rural children attend well-resourced schools that support learning.",
    icon: School,
  },
  {
    title: "Comprehensive Learning Resources",
    text: "Create and distribute relevant books, digital tools and hands-on kits; train educators to use them.",
    icon: BookOpen,
  },
  {
    title: "Empower Local Educators",
    text: "Provide practical training in teaching methods, classroom management and responsible tech use.",
    icon: Users,
  },
  {
    title: "Community Engagement",
    text: "Mobilize parents, leaders and mentors through awareness sessions and after-school support.",
    icon: Heart,
  },
  {
    title: "Collaborative Partnerships",
    text: "Work with government, business and nonprofits to pool resources and scale proven programs.",
    icon: Handshake,
  },
  {
    title: "Volunteers Connection",
    text: "Connect local & international volunteers for mentoring, tutoring and workshops that lift learners.",
    icon: Globe2,
  },
];

export const approachPillars: IconEntry[] = [
  {
    title: "Accessible Education",
    text: "Breaking down barriers in remote areas with flexible learning models to ensure every child can attend school.",
    icon: Layers,
  },
  {
    title: "Community Engagement",
    text: "Involving families and local communities to support children's learning and create a nurturing environment.",
    icon: Users,
  },
  {
    title: "Tailored Learning",
    text: "Training local educators and customizing education to meet the unique needs of rural children for better outcomes.",
    icon: Heart,
  },
];

export const reasons = [
  {
    title: "Empowerment",
    text: "Knowledge builds informed choices, employability and independence.",
  },
  {
    title: "Economic Development",
    text: "Skilled learners adopt better farming and entrepreneurship practices.",
  },
  {
    title: "Health Improvement",
    text: "Education improves sanitation, nutrition and disease prevention habits.",
  },
  {
    title: "Social Change",
    text: "Critical thinking challenges harmful norms and enables active citizenship.",
  },
  {
    title: "Gender Equality",
    text: "Educated girls delay marriage, expand career paths and uplift families.",
  },
  {
    title: "Cultural Preservation",
    text: "Inclusive curricula keep local languages and heritage alive.",
  },
];

// Central partner data for easier maintenance / future CMS hookup
export const featuredPartner = {
  name: "Government of Ireland",
  highlight: "Ireland",
  logo: "/images/partners/govt_of_ireland.jpg",
  description:
    "Support that advances equitable education and child wellbeing across rural Ghana.",
  link: "/partners/govt-of-ireland",
};

export const supporters: { name: string; logo: string }[] = [
  { name: "Anike Foundation", logo: "/images/partners/anike_foundation.jpg" },
  { name: "Australian Aid", logo: "/images/partners/australian_aid.jpg" },
  { name: "Books For Africa", logo: "/images/partners/books_for_africa.jpg" },
  {
    name: "Education Saves Lives",
    logo: "/images/partners/education_saves_lives.jpg",
  },
  { name: "Good Deeds Day", logo: "/images/partners/good_deeds_day.jpg" },
  { name: "Water Charity", logo: "/images/partners/water_charity.jpg" },
].sort((a, b) => a.name.localeCompare(b.name));
