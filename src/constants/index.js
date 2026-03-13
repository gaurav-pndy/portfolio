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
  memoir,
  bootstrap,
  shadcn,
  supabase,
  firebase,
  sql,
  clerk,
  gsap,
  zentry,
  starbucks,
  tesla,
  nextjs,
  framer,
  nodejs,
  express,
  mongodb,
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

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },

  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "Redux",
    icon: redux,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    source_code_link: "https://github.com/gaurav-pndy/workly",
    live_link: "https://workly-chi.vercel.app/",
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
    source_code_link: "https://github.com/gaurav-pndy/pathfinder",
    live_link: "https://pathfinder-eight.vercel.app/",
  },
  {
    name: "Zentry Clone",
    description: "A clone of the awarded animated website Zentry.",
    tags: [
      {
        name: "react",
        image: reactjs,
      },
      {
        name: "javascript",
        image: javascript,
      },

      {
        name: "tailwind",
        image: tailwind,
      },
      {
        name: "GSAP",
        image: gsap,
      },
    ],
    image: zentry,
    source_code_link: "https://github.com/gaurav-pndy/zentry-clone",
    live_link: "https://zentry-clone-navy.vercel.app/",
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
    source_code_link: "https://github.com/gaurav-pndy/emp-manage-system",
    live_link: "https://emp-manage-system-nu.vercel.app/",
  },

  {
    name: "Memoir - Social App",
    description:
      "A mini social media app where users can create posts and view posts by users they follow.",
    tags: [
      {
        name: "react",
        image: reactjs,
      },
      {
        name: "typescript",
        image: typescript,
      },

      {
        name: "tailwind",
        image: tailwind,
      },
      {
        name: "graphQL",
        image: graphql,
      },
      {
        name: "supabase",
        image: supabase,
      },
    ],
    image: memoir,
    source_code_link: "https://github.com/gaurav-pndy/social-media-app",
    live_link: "https://social-media-app-flax-chi.vercel.app/",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Pasovit",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2025 - Present",
    points: [
      "Developed and maintained production-ready frontend features using React.js / Next.js, Tailwind CSS and other modern frontend tools.",
      "Converted complex Figma designs into pixel-perfect, responsive UI components, ensuring consistency across devices and browsers.",
      "Worked on and developed modern, client-facing websites including Pasovit’s own website.",
      "Collaborated closely on backend features using Node.js, Express, and MongoDB for selected modules to deliver high-quality releases.",
      "Worked on API design, data handling, and frontend–backend integration in a MERN stack environment.",
    ],
  },
  {
    title: "Frontend Developer (Internship)",
    company_name: "Jobbie",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Apr 2025",
    points: [
      "Contributed to the frontend development of Jobbie’s public-facing website, implementing responsive and user-friendly UI components using React and Tailwind CSS.",
      "Integrated REST APIs to fetch and render dynamic content on the frontend, handling loading and data states effectively.",
      "Improved layout structure, visual hierarchy, and mobile responsiveness to deliver a cleaner and more modern user experience.",
      "Collaborated closely with a small startup team, taking ownership of assigned UI tasks and delivering production-ready updates within tight timelines.",
    ],
  },
];
export { technologies, projects, experiences };
