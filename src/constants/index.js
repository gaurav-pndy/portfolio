import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  graphql,
  pathfinder,
  workly,
  ems,
  bootstrap,
  shadcn,
  supabase,
  firebase,
  sql,
  clerk,
  gsap,
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

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux",
    icon: redux,
  },

  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "ShadCN",
    icon: shadcn,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "Git",
    icon: git,
  },
];

const projects = [
  {
    name: "Workly - Job Portal",
    description:
      "A platform for job seekers to browse, save, and apply for jobs, and for recruiters to post and manage listings.",
    tags: [
      {
        name: "react",
        image: reactjs,
      },
      {
        name: "tailwind",
        image: tailwind,
      },
      {
        name: "shadCN",
        image: shadcn,
      },
      {
        name: "supabase",
        image: supabase,
      },
      {
        name: "clerk",
        image: clerk,
      },
    ],
    image: workly,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pathfinder - Trip Planner",
    description:
      "An AI-powered tool that helps users plan trips with personalized itineraries and hotel recommendations.",
    tags: [
      {
        name: "react",
        image: reactjs,
      },
      {
        name: "tailwind",
        image: tailwind,
      },
      {
        name: "firebase",
        image: firebase,
      },
      {
        name: "shadCN",
        image: shadcn,
      },
      {
        name: "GSAP",
        image: gsap,
      },
    ],
    image: pathfinder,
    source_code_link: "https://github.com/",
  },
  {
    name: "Employee Management System",
    description:
      "A system for managing employees, assigning tasks, and handling role-based access.",
    tags: [
      {
        name: "react",
        image: reactjs,
      },
      {
        name: "tailwind",
        image: tailwind,
      },
    ],
    image: ems,
    source_code_link: "https://github.com/",
  },
];

export { technologies, projects };
