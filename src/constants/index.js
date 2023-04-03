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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  facebook,
  instagram,
  linkedin,
  youtube,
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
    icon: web
  },
  {
    title: "IT Support Administrator",
    icon: mobile
  },
  {
    title: "License Drone Operator",
    icon: backend
  },
  {
    title: "Content Creator | Photos | Videos",
    icon: creator
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Front-End Developer Graduate",
    company_name: "EdX United Kingdom",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Support Administrator",
    company_name: "Abu Dhabi University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2018 - May 2022",
    points: [
      "Help Desk Support - Provided first line technical support to clients, responding within agreed timescales, and resolved issues and escalated problems with knowledgeable support and quality service.",
      "SharePoint Online (Office 365) - Creating and administrating SharePoint sites for users who are working on list, user permissions, and dashboard reports",
      "PowerShell ISE - Basic understanding of scripting using .NET language in PowerShell and Visual Studio",
      "User-Guide / Technical Documentation - Creating user-guide and troubleshooting instruction in video or document for students, faculties, and staff.",
      "Events / Audio and Visual Support - Support campus auditorium for operating lights, screen projections, and sounds based on the client needs.",
    ],
  },
  {
    title: "IT Technician",
    company_name: "Hyundai Engineering & Construction",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2015 - August 2017",
    points: [
      "IT Technician - Talking to staff or clients through a series of actions, either face-to-face or over the telephone to help set up systems or to resolve issues.",
      "RFID - Installing and troubleshooting RFID units.",
      "Network Administrator (Entry Level) - Coordinate with network admin to troubleshot network and data communications systems inside the power plant construction site.",
    ],
  },
];

const socials = [
  {
    name: "LinkedIn",
    icon: linkedin,
    source_link: "https://www.linkedin.com/in/rjpsazon/",
  },
  {
    name: "Facebook",
    icon: facebook,
    source_link: "https://www.facebook.com/itiksazon",
  },
  {
    name: "Instagram",
    icon: instagram,
    source_link: "https://www.instagram.com/itiksazon/",
  },
  {
    name: "Youtube",
    icon: youtube,
    source_link: "https://www.youtube.com/@everythingnice",
  },
]

const testimonials = [
  {
    testimonial:
      "Cool app! I like the business card that it generates, and the flipping animation. Also, great direction for future development!",
    name: "Dan Mueller",
    designation: "EdX Instructor",
    company: "2u",
    image: "https://ca.slack-edge.com/T046EU58NBT-U04ANK9UKFT-87961590a5a4-512",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Business Card Generator",
    description:
      "This is a business card generator app that allows users to easily create a professional business card. The business card generator app is ideal for entrepreneurs, freelancers, small business owners, and anyone who wants to create a professional-looking business card quickly and easily.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "googleapi",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/GabeKatz90/Business-Card-Generator",
  },
  {
    name: "University Explorer",
    description:
      "In this project we were tasked with creating a website from scratch which incorprates the use of two third-party API's, The User story was to be decided in our group.",
    tags: [
      {
        name: "jQuery",
        color: "blue-text-gradient",
      },
      {
        name: "opentripapi",
        color: "green-text-gradient",
      },
      {
        name: "hipouniapi",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rpjsazon/UniversityExplorer",
  },
  {
    name: "My Portfolio",
    description:
      "My first portfolio.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://rpjsazon.github.io/itiksazonvisuals/",
  },
];

export { services, technologies, experiences, socials, testimonials, projects };