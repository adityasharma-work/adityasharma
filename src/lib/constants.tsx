import LogoJavascript from "../../public/assets/logos/icon-javascript.svg";
import LogoTypescript from "../../public/assets/logos/icon-typescript.svg";
import LogoReact from "../../public/assets/logos/icon-react.svg";
import LogoNextjs from "../../public/assets/logos/icon-next.svg";
import LogoNodejs from "../../public/assets/logos/icon-node.svg";
import LogoMongoDb from "../../public/assets/logos/icon-mongodb.svg";
import LogoExpress from "../../public/assets/logos/icon-express.svg";
import LogoTailwindcss from "../../public/assets/logos/icon-tailwindcss.svg";
import LogoGit from "../../public/assets/logos/icon-git.svg";
import LogoRedux from "../../public/assets/logos/icon-redux.svg";
import LogoFirebase from "../../public/assets/logos/icon-firebase.svg";
import LogoChakra from "../../public/assets/logos/icon-chakra-ui.svg";
import LogoJava from "../../public/assets/logos/icon-java.svg";
import LogoGraphQl from "../../public/assets/logos/icon-graphql.svg";
import LogoShadcn from "../../public/assets/logos/icon-shadcn.svg";

import LogoCloudAnalogy from "../../public/assets/images/ca-logo.png";
import LogoPrepbytes from "../../public/assets/images/pb-logo.png";
import ProjectImageZentry from "../../public/assets/images/project-image-zentry.png";
import ProjectImageDocStore from "../../public/assets/images/project-image-docstore.png";


export const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Work Experience",
    href: "#work-experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const techStack = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    url: "https://expressjs.com/",
  },
  {
    label: "Redux",
    logo: LogoRedux,
    url: "https://nestjs.com/",
  },
  {
    label: "Firebase",
    logo: LogoFirebase,
    url: "https://socket.io/",
  },
  {
    label: "Chakra UI",
    logo: LogoChakra,
    url: "",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDb,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Shadcn UI",
    logo: LogoShadcn,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Java",
    logo: LogoJava,
    url: "https://www.figma.com/",
  },
  {
    label: "GraphQl",
    logo: LogoGraphQl,
    url: "https://www.cypress.io/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const workExperiences = [
  {
    id: 1,
    title: "Cloud Analogy",
    designation: "Full Stack Developer",
    duration: "Feb 2022 - Nov 2024",
    description: [
      "Contributed to projects across diverse domains, including insurance, financial services, and travel and tourism.",
      "Developed reusable and modular components to handle dynamic UI requirements, improving code maintainability and reducing development time by 30%",
      "Optimized graph rendering in ReactJs for large datasets, reducing load time by 60% through dynamic node positioning and virtualized rendering.",
      "Integrated payment gateways like StripeJS and Razorpay, enabling secure and efficient transactions while improving payment processing success rates.",
      "Integrated Google Maps API for location-based features, delivering dynamic, real-time mapping and optimizing map loading time by 30% through caching and debounced geolocation updates, enhancing user experience and accuracy.",
      "ReactJS, Typescript, Redux,  ExpressJS, GraphQL, AWS-S3, Redis, MongoDB, TailwindCSS, ReactFlow, JIRA, Github",
    ],
    imageSrc: LogoCloudAnalogy,
  },
  {
    id: 2,
    title: "Prepbytes",
    designation: "Training & Internship",
    duration: "Apr 2021 - Sept 2022",
    description: [
      "I gained foundational knowledge in HTML, CSS, JavaScript, and the DOM.",
      "Hands-on experience with frameworks like ReactJS and NodeJS, building basic projects using SASS/SCSS.",
      "Hands-on experience with styling frameworks such as Ant Design and Styled Components",
      "Developed a fully functional E-commerce application using the MERN stack.",
    ],
    imageSrc: LogoPrepbytes,
  },
];

export const personalProjects = [
  {
    name: "GSAP-Zentry",
    description:
      "Developed a visually engaging and interactive landing page for a gaming website (like Zentry) using React and GSAP.",
    url: "https://gsap-animated-zentry.vercel.app/",
    previewImage: ProjectImageZentry,
    technologies: ["ReactJS", "Typescript", "GSAP", "Three JS"],
  },
  {
    name: "DocStore",
    description:
      "A secure document storage platform where users can register, upload, share and manage their documents seamlessly.",
    url: "https://document-storage.vercel.app/",
    previewImage: ProjectImageDocStore,
    technologies: ["NextJS", "Typescript", "AppWrite"],
  },
];