import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  skyhub,
  invetory,
  tripguide,
  carrent,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Next.js  Developer",
    company_name: "Sky-hub",
    icon: skyhub,
    iconBg: "#383E56",
    date: "july 2023 - Febrary 2025",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Personally",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "september -Juanary 2024",
    points: [
      "Developing and maintaining mobile applications using React Native and related technologies.",

    "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality mobile products.",
    
    "Implementing responsive and adaptive designs using Tailwind CSS (via NativeWind ) to ensure a seamless user experience across iOS and Android platforms.",
    
    "Ensuring cross-platform compatibility and optimizing applications for performance and scalability.",
    ]
    
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: web,
    iconBg: "#383E56",
    date: "part time",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "",
    icon: backend,
    iconBg: "#E6DEDD",
    date: " freelance(present)",
    points: [
      "Develop and maintain web applications using Next.js and Node.js, ensuring high performance and scalability",
      "Collaborate with designers, product managers, and developers by assigning tasks, guiding team members, and ensuring smooth project execution",
      "Implement responsive designs, optimize UI/UX, and ensure cross-browser compatibility for a seamless user experience",
      "Conduct code reviews, provide constructive feedback, and mentor junior developers to improve code quality and best practices"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rihana  transformed our vision into a stunning website, exceeding all expectations with her creativity ",
    name: "Jemila Bekele",
    designation: "Cto",
    company: "Personal",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rihana.",
    name: "Mr.Birhan",
    designation: "Ceo",
    company: "Sky-hub",
    image: "",
  },
];

const projects = [
  {
    name: "RealState Eccomerce ",
    description:
    "A web-based platform enabling users to search, explore, and purchase real estate properties with advanced filters . It simplifies buying, selling, and managing properties through secure transactions and a user-friendly interface.", 
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: invetory,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stock Management",
    description:
    " a web-based application that helps businesses manage  inventory, track stock levels, and generate reports. It provides real-time data on stock availability, sales, and purchases, helping businesses make informed decisions.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Nest js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: ""
  },
  {
    name: "Dental Management ",
    description:
    "A web-based platform that helps dental clinics manage appointments, patient records, and billing. It provides a user-friendly interface for patients to book appointments, view treatment history, and make payments online.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
