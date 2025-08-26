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
  name: "Government of Australia",
  highlight: "Australia",
  logo: "/images/partners/australian_aid.webp",
  description:
    "The Government of Australia, through the Australian High Commission's Direct Aid Program (DAP), funded key improvements at Kasunya D/A and R/C Basic Schools. Their support enabled the kindergarten refurbishment, the creation of a modern computer lab, and a renovated library, improving learning spaces and digital access. We sincerely thank DAP for strengthening educational opportunities and the future prospects of children in Shai-Osudoku.",
  link: "",
};

export const supporters: { name: string; logo: string }[] = [
  {
    name: "African Library Project",
    logo: "/images/partners/african_library_project.webp",
  },
  {
    name: "Anike Foundation",
    logo: "/images/partners/anike_foundation.webp",
  },
  {
    name: "Australian Aid",
    logo: "/images/partners/australian_aid.webp",
  },
  {
    name: "Biblionef",
    logo: "/images/partners/biblionef.webp",
  },
  {
    name: "Books for Africa",
    logo: "/images/partners/books_for_africa.webp",
  },
  {
    name: "Bridge Africa Foundation",
    logo: "/images/partners/bridge_africa_foundation.webp",
  },
  {
    name: "Chezuba",
    logo: "/images/partners/chezuba.webp",
  },
  {
    name: "Darien Book Aid",
    logo: "/images/partners/darien_book_aid.webp",
  },
  {
    name: "Derde Wereld Groep",
    logo: "/images/partners/derde_wereld_groep.webp",
  },
  {
    name: "Education Saves Lives",
    logo: "/images/partners/education_saves_lives.webp",
  },
  {
    name: "Footprint Possibilities",
    logo: "/images/partners/footprint_possibilities.webp",
  },
  {
    name: "Ghana Education Service",
    logo: "/images/partners/ghana_education_service.webp",
  },
  {
    name: "Good Deeds Day",
    logo: "/images/partners/good_deeds_day.webp",
  },
  {
    name: "Google",
    logo: "/images/partners/google.webp",
  },
  {
    name: "Government of Ireland International Development Programme",
    logo: "/images/partners/govt_of_ireland.webp",
  },
  {
    name: "International Book Project",
    logo: "/images/partners/intl_book_project.webp",
  },
  {
    name: "New Zealand Foreign Affairs & Trade",
    logo: "/images/partners/new_zealand_fat.webp",
  },
  {
    name: "TechSoup",
    logo: "/images/partners/techsoup.webp",
  },
  {
    name: "Water Charity",
    logo: "/images/partners/water_charity.webp",
  },
];
