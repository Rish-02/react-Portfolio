import {
  frontend,
  web,
  designer,
  javascript,
  php,
  html,
  css,
  reactjs,
  mySQL,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  firebase,
  redx,
  hsrhitechsolutions,
  restapi,
  photoshop,
  inventory,
  portfolio,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  // {
  //   id:"home",
  //   title:"Home",
  // },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Graphic Designer",
    icon: designer,
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
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: mySQL,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "REST API",
    icon: restapi,
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
    name: "Google Firebase",
    icon: firebase,
  },
  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
];

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "HSR Hi-Tech Solutions",
    icon: hsrhitechsolutions,
    iconBg: "#383E56",
    date: "April 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using related technologies.",
      "Collaborating with teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Work URL- Home - House Sparrow Films",
      "Work URL - HSR Hi-Tech Solutions" ,
    ],
  },
  {
    title: "Web Developer",
    company_name: "The RedX Technologies",
    icon: redx,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Developing and maintaining Frontend and backend using PHP and MY-SQL and other related technologies.",
      "Collaborating with cross-functional teams including designers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "3.	Applying basic cyber security principles to protect client’s data from leaking on to the internet",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Teco Nico",
    iconBg: "#383E56",
    date: "Nov 2021 - Dec 2021",
    points: [
      "Designing graphical layouts and components for client needs.",
      "Direct client communication",
    ],
  },
];


const projects = [
  {
    name: "Inventory Management",
    description:
      "Management inventory in a simple, scalable application Login – Register functionality with user-based data encryption",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: "https://pinventapp.netlify.app/",
  },
  {
    name: "Portfolio Creater",
    description:
      "Web application that allows users to create portfolios online free of cost for a single layout. Easy UI",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "google firebase",
        color: "green-text-gradient",
      },
      {
        name: "html css",
        color: "red-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://portfolio-creater.netlify.app/",
  },
  {
    name: "crypto Tracker",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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

export { services, technologies, experiences, projects };
