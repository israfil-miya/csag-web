export interface ProjectItem {
  slug: string;
  title: string;
  date: string; // ISO date
  sector: string; // e.g. Education, Infrastructure, Health Literacy
  status: "Completed" | "Ongoing" | "Planned";
  sponsor?: string;
  partner?: string;
  contributors?: string[];
  image: string; // path under /public
  excerpt: string;
  location?: string; // e.g. City, Country
  description: string[]; // paragraphs
}

export const projects: ProjectItem[] = [
  {
    slug: "ghana-education-service-tema-west-donation",
    title: "Ghana Education Service Tema West Donation",
    date: "2024-11-15",
    sector: "Education",
    status: "Completed",
    sponsor: "Footprint Possibilities Inc.",
    partner: "Book For Africa",
    contributors: ["Ghana Book Trust"],
    image: "/images/projects/ghana-education-service-tema-west-donation.webp",
    excerpt:
      "Providing diverse books to inspire lifelong reading habits, enrich students' educational experiences in Tema West, and foster a strong reading culture within the community.",
    description: [
      "Child Survival Aid Ghana (CSAG) recently donated assorted library books to the Ghana Education Service (GES) in Tema West. This initiative aims to promote early literacy and foster a reading culture among school children. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },
  {
    slug: "kasunya-da-kindergarten-refurbishment",
    title: "Refurbishment of the Kasunya D/A Kindergarten Classroom",
    date: "2025-02-10",
    sector: "Education",
    status: "Completed",
    sponsor: "Australian High Commission under the Direct Aid Program (DAP)",
    location: "Kasunya – Shai-Osudoku District",
    image:
      "/images/projects/refurbishment-of-the-kasunya-d-a-kindergarten-classroom.webp",
    excerpt:
      "Refurbished the Kindergarten classroom at Kasunya D/A School with child-friendly furniture to create a more engaging and comfortable learning space, encouraging creativity and active participation among young learners.",
    description: [
      "We are excited to announce the successful refurbishment of the Kindergarten classroom at Kasunya D/A School in the Shai-Osudoku District. This project aimed to create a comfortable and conducive learning environment for our youngest learners.",
      "The refurbishment included the provision of new tables and chairs specifically designed for young children. This improvement not only enhances the physical learning space but also encourages engagement and creativity among the students. We believe that a comfortable learning environment is essential for nurturing young minds, and this project directly contributes to our mission of providing quality education to every child. Thank you for supporting our initiatives and helping to make a difference in the lives of these children!",
    ],
  },
  {
    slug: "klagon-twma-school-library-refurbishment",
    title: "Klagon TWMA Basic School Library Refurbishment",
    date: "2025-01-05",
    sector: "Education",
    status: "Completed",
    sponsor: "Third World Group Foundation, Netherlands",
    location: "Klagon - Tema West",
    image:
      "/images/projects/klagon-twma-basic-school-library-refurbishment.webp",
    excerpt:
      "Refurbished Klagon TWMA Basic School Library to revive reading culture, provide an inviting learning space for pupils, and support one-on-one learning and student–teacher engagement.",
    description: [
      "The refurbishment of the Klagon TWMA Basic School Library aimed to provide a comfortable and inviting learning space for students. This initiative focused on improving, restoring, and reviving the declining reading abilities among school children. The upgraded library now offers students and tutors opportunities for one-on-one interactions and open conversations, fostering a supportive environment for learning and personal growth. This project underscores our commitment to enhancing educational resources and promoting literacy within the community. Thank you to the Third World Group Foundation for their generous support in making this transformation possible!",
    ],
  },
  {
    slug: "kasunya-rc-basic-school-library-refurbishment",
    title: "Kasunya R/C Basic School Library",
    date: "2024-09-20",
    sector: "Education",
    status: "Completed",
    sponsor: "Australian High Commission under the Direct Aid Program (DAP)",
    location: "Kasunya - Shai-Osudoku District",
    image: "/images/projects/kasunya-r-c-basic-school-library.webp",
    excerpt:
      "Upgraded library facilities at Kasunya R/C Basic School to support students' academic growth, foster a love for reading, and strengthen community engagement and learning opportunities.",
    description: [
      "We are excited to announce the successful refurbishment of the library at Kasunya R/C Basic School in the Shai-Osudoku District. This project aims to enhance teaching and learning for the entire school community by providing a well-resourced and inviting space for students and teachers to access information and foster a love for reading. The new library facility will support the educational needs of students, encouraging academic growth and community engagement.",
    ],
  },
  {
    slug: "mafi-kpeyibor-4-classroom-construction",
    title: "Construction of 4-Unit Classroom at Mafi-Kpeyibor D/A Basic School",
    date: "2024-06-12",
    sector: "Education",
    status: "Completed",
    sponsor: "New Zealand Embassy Fund",
    image:
      "/images/projects/construction-of-4-unit-classroom-at-mafi-kpeyibor-d-a-basic-school.webp",
    excerpt:
      "Constructed four classrooms in Mafi-Kpeyibor to provide a safe and engaging learning environment, improve educational infrastructure, and support effective teaching and academic success.",
    description: [
      "This project aimed to significantly enhance the learning environment for students in the Mafi-Kpeyibor community. Recognizing the crucial role of a conducive educational setting in fostering academic success, this initiative provided the necessary infrastructure to support effective teaching and learning. With the completion of these four classrooms, we are optimistic that students will thrive academically in a safe and engaging space. Thank you to the New Zealand Embassy Fund for making this vital project possible!",
    ],
  },
  {
    slug: "mafi-kpeyibor-portable-water-project",
    title:
      "Provision of Portable Drinking Water for Mafi-Kpeyibor D/A Basic School",
    date: "2025-03-28",
    sector: "Water",
    status: "Completed",
    sponsor: "Water Charity",
    image:
      "/images/projects/provision-of-portable-drinking-water-for-mafi-kpeyibor-d-a-basic-school.webp",
    excerpt:
      "Installed a clean water supply at Mafi-Kpeyibor D/A Basic School to ensure safe drinking water, improve student health, and create a more conducive learning environment for the entire school community.",
    description: [
      "We are pleased to announce the completion of our water supply project at Mafi-Kpeyibor D/A Basic School, generously sponsored by Water Charity. This initiative was crucial in addressing the urgent need for clean and safe drinking water for the students and the local community. Access to potable water is essential for maintaining the health and well-being of our students, as well as promoting a conducive learning environment. With this project, we have ensured that the school community has reliable access to this vital resource, significantly improving their daily lives and educational experience. Thank you to Water Charity and everyone involved for making this project a success!",
    ],
  },
  {
    slug: "mafi-dedukope-clinic-water-project",
    title: "Mafi-Dedukope Clinic Water Project",
    date: "2025-04-18",
    sector: "Water",
    status: "Completed",
    sponsor: "Water Charity",
    image: "/images/projects/mafi-dedukope-clinic-water-project.webp",
    excerpt:
      "Installed a borehole and water storage system at Mafi-Dedukope Clinic to provide a reliable supply of clean water, enhance healthcare outcomes, and support community well-being.",
    description: [
      "The Mafi-Dedukope Clinic Water Project was developed to meet a critical need for a reliable and sustainable source of clean water at the clinic. By providing access to potable water on the premises, this initiative directly enhances healthcare outcomes and supports overall community well-being. The project involved the installation of a borehole, along with a water storage tank, ensuring that the clinic has a consistent and readily available supply of water. This resource is essential for various medical procedures, maintaining sanitation standards, and effective clinic operations. The successful completion of this project marks a significant improvement in the healthcare services available to the community.",
    ],
  },
  {
    slug: "kasunya-rc-basic-school-computer-lab",
    title: "Kasunya R/C Basic School Computer Lab",
    date: "2025-05-30",
    sector: "Education",
    status: "Completed",
    sponsor: "Australian High Commission's Direct Aid Program (DAP)",
    location: "Kasunya, Shai-Osudoku District",
    image: "/images/projects/kasunya-r-c-basic-school-computer-lab.webp",
    excerpt:
      "Completed a computer lab at Kasunya R/C Basic School to enhance students' digital literacy, provide access to modern technology, and prepare learners for future education and employment opportunities.",
    description: [
      "We are excited to announce the completion of the Computer Lab at Kasunya R/C Basic School! This facility provides students with a dedicated space to explore, create, and connect, significantly enhancing their digital literacy skills. The computer lab is equipped with modern technology, empowering students to engage with digital tools and resources effectively. By fostering these essential skills, we aim to prepare students for a future where technology plays a crucial role in education and employment opportunities. This initiative is a testament to our commitment to improving educational outcomes and preparing young minds for the challenges of tomorrow. Thank you to the Australian High Commission for their generous support in making this project possible!",
    ],
  },
  {
    slug: "kotobabi-no-cluster-of-schools-donation",
    title: "Kotobabi No. Cluster of Schools Donation",
    date: "2025-02-26",
    sector: "Education",
    status: "Completed",
    sponsor: "African Library Project",
    partner: "Michael Lapsley Foundation",
    image: "/images/projects/kotobabi-no-cluster-of-schools-donation.webp",
    excerpt:
      "Donated assorted library books to Kotobabi No. Cluster of Schools to promote early literacy and a reading culture.",
    description: [
      "CSAG donated assorted library books to the school to help promote early literacy and a reading culture amongst the school children. The objective under this program is to improve, restore and revive the loss of reading ability among school children in the school. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },
  {
    slug: "mafi-kpeyibor-d-a-basic-school-donation",
    title: "Mafi-Kpeyibor D/A Basic School Donation",
    date: "2025-03-05",
    sector: "Education",
    status: "Completed",
    sponsor: "Biblionef Ghana",
    image: "/images/projects/mafi-kpeyibor-d-a-basic-school-donation.webp",
    excerpt:
      "Donated assorted library books to Mafi-Kpeyibor D/A Basic School to promote early literacy and a reading culture.",
    description: [
      "CSAG donated assorted library books to the school to help promote early literacy and a reading culture amongst the school children. The objective under this program is to improve, restore and revive the loss of reading ability among school children in the school. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },
  {
    slug: "mafi-aklamador-d-a-basic-school-donation",
    title: "Mafi-Aklamador D/A Basic School Donation",
    date: "2024-12-12",
    sector: "Education",
    status: "Completed",
    sponsor: "Footprint Possibilities Inc.",
    partner: "Book For Africa",
    contributors: ["Ghana Book Trust"],
    image: "/images/projects/mafi-aklamador-d-a-basic-school-donation.webp",
    excerpt:
      "Donated assorted library books to Mafi-Aklamador D/A Basic School to promote early literacy and a reading culture.",
    description: [
      "CSAG donated assorted library books to the school to help promote early literacy and a reading culture amongst the school children. The objective under this program is to improve, restore and revive the loss of reading ability among school children in the school. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },
  {
    slug: "dela-outreach-school-donation",
    title: "Dela Outreach School Donation",
    date: "2024-12-22",
    sector: "Education",
    status: "Completed",
    sponsor: "African Library Project",
    partner: "Ghana Book Trust",
    image: "/images/projects/dela-outreach-school-donation.webp",
    excerpt:
      "Donated assorted library books to Dela Outreach School to promote early literacy and a reading culture.",
    description: [
      "CSAG donated assorted library books to the school to help promote early literacy and a reading culture amongst the school children. The objective under this program is to improve, restore and revive the loss of reading ability among school children in the school. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },
  {
    slug: "arms-of-god-international-school-donation",
    title: "Arms of God International School Donation",
    date: "2025-01-14",
    sector: "Education",
    status: "Completed",
    sponsor: "African Library Project",
    partner: "Ghana Book Trust",
    image: "/images/projects/arms-of-god-international-school-donation.webp",
    excerpt:
      "Donated assorted library books to Arms of God International School to promote early literacy and a reading culture.",
    description: [
      "CSAG donated assorted library books to the school to help promote early literacy and a reading culture amongst the school children. The objective under this program is to improve, restore and revive the loss of reading ability among school children in the school. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },
  {
    slug: "old-lashibi-twma-jhs-donation",
    title: "Old Lashibi TWMA JHS Donation",
    date: "2025-01-28",
    sector: "Education",
    status: "Completed",
    sponsor: "Footprint Possibilities Inc.",
    partner: "Book for Africa",
    contributors: ["Ghana Book Trust"],
    image: "/images/projects/old-lashibi-twma-jhs-donation.webp",
    excerpt:
      "Donated assorted library books to Old Lashibi TWMA JHS to promote early literacy and a reading culture.",
    description: [
      "CSAG donated assorted library books to the school to help promote early literacy and a reading culture amongst the school children. The objective under this program is to improve, restore and revive the loss of reading ability among school children in the school. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },
  {
    slug: "sakumono-twma-basic-school-donation",
    title: "Sakumono TWMA Basic School Donation",
    date: "2025-02-12",
    sector: "Education",
    status: "Completed",
    sponsor: "Footprint Possibilities Inc.",
    partner: "Book for Africa",
    contributors: ["Ghana Book Trust"],
    image: "/images/projects/sakumono-twma-basic-school-donation.webp",
    excerpt:
      "Donated assorted library books to Sakumono TWMA Basic School to promote early literacy and a reading culture.",
    description: [
      "CSAG donated assorted library books to the school to help promote early literacy and a reading culture amongst the school children. The objective under this program is to improve, restore and revive the loss of reading ability among school children in the school. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },
  {
    slug: "great-future-stars-academy-donation",
    title: "Great Future Stars Academy Donation",
    date: "2025-03-19",
    sector: "Education",
    status: "Completed",
    sponsor: "Footprint Possibilities Inc.",
    partner: "Book for Africa",
    contributors: ["Ghana Book Trust"],
    image: "/images/projects/great-future-stars-academy-donation.webp",
    excerpt:
      "Donated assorted library books to Great Future Stars Academy to promote early literacy and a reading culture.",
    description: [
      "CSAG donated assorted library books to the school to help promote early literacy and a reading culture amongst the school children. The objective under this program is to improve, restore and revive the loss of reading ability among school children in the school. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },
  {
    slug: "adjei-kojo-twma-cluster-of-schools-donation",
    title: "Adjei-Kojo TWMA Cluster of Schools Donation",
    date: "2025-04-09",
    sector: "Education",
    status: "Completed",
    sponsor: "Footprint Possibilities Inc.",
    partner: "Book for Africa",
    contributors: ["Ghana Book Trust"],
    image: "/images/projects/adjei-kojo-twma-cluster-of-schools-donation.webp",
    excerpt:
      "Donated assorted library books to Adjei-Kojo TWMA Cluster of Schools to promote early literacy and a reading culture.",
    description: [
      "CSAG donated assorted library books to the school to help promote early literacy and a reading culture amongst the school children. The objective under this program is to improve, restore and revive the loss of reading ability among school children in the school. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },
  {
    slug: "new-classroom-and-office-block-project-at-abuvie-kpong-d-a-basic-school",
    title:
      "New Classroom and Office Block Project at Abuvie-Kpong D/A Basic School",
    date: "2025-05-12",
    sector: "Education",
    status: "Ongoing",
    location: "Abuvie-Kpong, Manya-Krobo District",
    image:
      "/images/projects/new-classroom-and-office-block-project-at-abuvie-kpong-d-a-basic-school.webp",
    excerpt:
      "Constructing a three-unit classroom and office block at Abuvie-Kpong D/A Basic School to enhance learning spaces, support administrative functions, and foster community engagement.",
    description: [
      "We are thrilled to share that we are currently constructing a three-unit classroom and office block at Abuvie-Kpong D/A Basic School. This new facility will serve as a Junior High School block, aimed at enhancing the educational environment for our students.",
      `
PROJECT OBJECTIVES:
1. Enhanced Learning Spaces: The new classroom units will provide a more conducive learning environment, allowing for better educational outcomes.
2. Office Facilities: The addition of office space will support administrative functions, ensuring that staff can effectively manage school operations.
3. Improved Accessibility: The new structure will be designed to accommodate all students, offering easy access for everyone within the community.
4. Community Engagement: We plan to involve local stakeholders in the project to build a sense of ownership and ensure that the school meets the needs of the community.
5. Future Growth: This initiative lays the groundwork for potential expansion and development of additional educational programs in the future.
      `,
      "We believe this project will significantly contribute to the educational infrastructure in Abuvie-Kpong, fostering a positive learning experience for all students. Thank you for your continued support as we make this vision a reality!",
    ],
  },
  {
    slug: "mefi-dedukope-new-clinic-project",
    title: "Mefi-Dedukope New Clinic Project",
    date: "2025-06-11",
    sector: "Health",
    status: "Completed",
    location: "Mefi-Dedukope, Dangme West district",
    image: "/images/projects/mefi-dedukope-new-clinic-project.webp",
    excerpt:
      "Constructed a new clinic in Mafi-Dedukope to improve healthcare access, provide modern medical facilities, and promote community health education.",
    description: [
      "The new clinic in Mafi-Dedukope is complete and now operational. The facility replaces the old clinic and provides improved access to primary healthcare, maternal and child health services, and routine medical care for the surrounding community.",
      "Key achievements include the completion of the clinic building, installation of essential medical equipment, implementation of community health education programs, and the training of local health workers to ensure ongoing, high-quality service delivery.",
      "We are grateful to our partners, donors, local health authorities, and community members for their support in bringing this project to fruition. The clinic will continue to serve as a cornerstone for improved health outcomes in the area.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((w) => w.slug === slug);
}
