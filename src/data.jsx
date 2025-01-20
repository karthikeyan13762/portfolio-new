import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaVideo,
  FaDiscourse,
  FaTerminal,
  FaBookOpen,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { SiNetlify, SiRender } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/chaty.jpg";
import Work3 from "./assets/project3.png";
import Work4 from "./assets/project4.png";
import Work5 from "./assets/lms.jpg";
import Work6 from "./assets/marcketplace.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";
import { FaArrowUpZA } from "react-icons/fa6";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav_icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav_icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Project",
    icon: <FaFolderOpen className="nav_icon" />,
    path: "/project",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav_icon" />,
    path: "/contact",
  },
];
export const description = [
  `
  I am Karthikeyan M from Madurai, a BE Mechanical Engineering graduate from RVS College of Engineering and Technology, passed out in 2019.
  I have over 2 years of experience as a VIR Approval Officer at Royal Sundaram General Insurance Co. Limited, where I worked from September 18, 2020 to December 26, 2022. 
  Currently, I am enhancing my technical skills through a Fullstack MERN course at GUVI, an IIT Madras incubated company. 
  I have developed proficiency in HTML5, CSS3, JavaScript, Bootstrap, ReactJS, NodeJS, ExpressJS, MongoDB, and SQL.
  I am eager to apply my skills in a dynamic and challenging environment, contributing to innovative projects and continuing to grow as a fullstack developer.
`,
];

export const stats = [
  {
    id: 1,
    no: "RVS College of Engineering and Technology <br/> B.E[Mechanical Engineering] ",
    title: "Sep/2015 - July/2019  ",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "09/2020 - 12/2022",
    title: "Officer <span>Royal Sundaram General Insurance </span> ",
    desc: "<br/> <h4> -  Vehicle Inspection Report Approval Process (RS Mobility VIR App, Policy Bazaar, Self-Inspection, Quick Insurance)</h4> <br/>  <h4> - Mail Escalation Handling: </h4> Managed and responded to mail escalations efficiently in the VIR approval process. <br/> <br/>  <h4> - Team Support:  </h4> Provided comprehensive support to the team by handling incoming calls from across India through the landline, ensuring responsible and timely responses.",
  },

  {
    id: 2,
    category: "course",
    icon: <FaBookOpen />,
    year: "08/2023- 03/2024",
    title: "MERN Stack Course<span>GUVI</span> ",
    desc: "I have completed the MERN stack course at GUVI, an IIT Madras incubated company. During this course, I gained proficiency in HTML5, CSS3, JavaScript, Bootstrap 5, ReactJS, NodeJS, ExpressJS, MongoDB, and SQL. These skills have equipped me to build dynamic, responsive, and scalable web applications, covering both frontend design and backend development, as well as database management.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015-2019",
    title:
      "B.E[Mechanical Engineering] <span> RVS College of Engineering and Technology </span> ",
    desc: " ",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2014-2015",
    title: "12th/HSC <span>Mangayarkarasi Hr.Sec.School</span>",
    desc: "",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012-2013",
    title: "10th/SSLC <span>Mangayarkarasi Hr.Sec.School</span>  ",
    desc: "",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML5",
    percentage: "80",
  },

  {
    id: 2,
    title: "CSS3",
    percentage: "75",
  },
  {
    id: 3,
    title: "BOOTSTRAP5",
    percentage: "75",
  },

  {
    id: 4,
    title: "JAVASCRIPT",
    percentage: "75",
  },
  {
    id: 5,
    title: "REACT JS",
    percentage: "70",
  },

  {
    id: 6,
    title: "NODE JS",
    percentage: "55",
  },
  {
    id: 7,
    title: "EXPRESS JS",
    percentage: "55",
  },

  {
    id: 8,
    title: "SQL",
    percentage: "70",
  },
  {
    id: 9,
    title: "MONGO DB",
    percentage: "70",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "E-Commerce Project",
    githubFE: "https://github.com/karthikeyan13762/project-name-frontend",
    githubBE: "https://github.com/karthikeyan13762/project-name-backend",
    deployedLink: "https://ecommerce-kcart8.onrender.com",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "MERN E-Commerce Project ",
      },

      {
        icon: <FaCode />,
        title: "Technologies : ",
        desc: "React,Bootstrap,Node.js,Express.js,Mongo DB",
      },
      {
        title: <b className="admin">Admin : </b>,
        desc: "karthi@gmail.com",
      },
      {
        title: <b className="admin">Password : </b>,
        desc: "karthi429",
      },
    ],
  },
  {
    id: 2,
    img: Work5,
    title: "LMS app",
    githubFE: " https://github.com/karthikeyan13762/project-name-frontend-lms",
    githubBE: " https://github.com/karthikeyan13762/project-name-backend-lms",
    deployedLink: "https://library-management-system-8.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Library Management System",
      },

      {
        icon: <FaCode />,
        title: "Technologies : ",
        desc: "React,CSS,Node.js,Express.js,Mongo DB",
      },
      {
        title: <b className="admin">Admin : </b>,
        desc: "admin",
      },
      {
        title: <b className="admin">Password : </b>,
        desc: "admin123",
      },

      // {
      //   icon: <FaVideo />,
      //   title: "Demo Video : ",
      //   desc: `<a href=${Video1}>Todo-List-Demo</a>`,
      // },
    ],
  },
  {
    id: 3,
    img: Work2,
    title: "Chat App",
    githubFE: " https://github.com/karthikeyan13762/chaty-app-frontend",
    githubBE: " https://github.com/karthikeyan13762/chaty-app-backend",
    deployedLink: "https://chaty-app-8.netlify.app",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Chat App",
      },

      {
        icon: <FaCode />,
        title: "Technologies : ",
        desc: "React,CSS,Bootstrap,Express.js,Mongo DB,",
      },
      {
        title: <b className="admin">User : </b>,
        desc: "karthi",
      },
      {
        title: <b className="admin">Password : </b>,
        desc: "12345678",
      },

      // {
      //   icon: <FaVideo />,
      //   title: "Demo Video : ",
      //   desc: `<a href=${Video1}>Todo-List-Demo</a>`,
      // },
    ],
  },

  {
    id: 4,
    img: Work6,
    title: "Marcketplace App",
    githubFE:
      " https://github.com/karthikeyan13762/project-name-frontend-marcketplace",
    githubBE:
      " https://github.com/karthikeyan13762/project-name-backend-marcketplace",
    deployedLink: "https://marcketplace-8.netlify.app",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Marcketplace App",
      },

      {
        icon: <FaCode />,
        title: "Technologies : ",
        desc: "React,Redux,CSS,Bootstrap,Express.js,Mongo DB,",
      },
      {
        title: <b className="admin">Admin : </b>,
        desc: "karthi@gmail.com",
      },
      {
        title: <b className="admin">Password : </b>,
        desc: "123456",
      },

      // {
      //   icon: <FaVideo />,
      //   title: "Demo Video : ",
      //   desc: `<a href=${Video1}>Todo-List-Demo</a>`,
      // },
    ],
  },
  {
    id: 5,
    img: Work3,
    title: "CRUD Axios",
    githubFE:
      "https://github.com/karthikeyan13762/project-name-frontend-crud-axios",
    githubBE:
      "https://github.com/karthikeyan13762/project-name-backend-crud-axios",
    deployedLink: "https://crud-axios-8.netlify.app",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "CRUD using REACT",
      },

      {
        icon: <FaCode />,
        title: "Technologies : ",
        desc: "React,ExpressJS,Bootstrap,MongoDB,NodeJS",
      },
      // {
      //   icon: <SiNetlify />,
      //   title: "Netlify : ",
      //   desc: '<a href="https://react-simple-crud-8.netlify.app">https://react-simple-crud-8.netlify.app</a>',
      // },
      // {
      //   icon: <FaGithub />,
      //   title: "Git-hub : ",
      //   desc: '<a href="https://github.com/karthikeyan13762/Simple-CRUD">https://github.com/karthikeyan13762/Simple-CRUD</a>',
      // },
      // {
      //   icon: <FaVideo />,
      //   title: "Demo Video : ",
      //   desc: `<a href=${Video2}>CRUD-Demo</a>`,
      // },
    ],
  },
  {
    id: 5,
    img: Work4,
    title: "Todo Fetch-Api",
    githubFE:
      "https://github.com/karthikeyan13762/project-name-frontend-todo-fetchApi",
    githubBE:
      "https://github.com/karthikeyan13762/project-name-backend-todo-fetchApi",
    deployedLink: "https://todo-fetch-api-8.netlify.app",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "CRUD using MERN",
      },

      {
        icon: <FaCode />,
        title: "Technologies : ",
        desc: "React,ExpressJS,Bootstrap,MongoDB,NodeJS",
      },
      // {
      //   icon: <SiNetlify />,
      //   title: "Netlify : ",
      //   desc: '<a href="https://react-simple-crud-8.netlify.app">https://react-simple-crud-8.netlify.app</a>',
      // },
      // {
      //   icon: <FaGithub />,
      //   title: "Git-hub : ",
      //   desc: '<a href="https://github.com/karthikeyan13762/Simple-CRUD">https://github.com/karthikeyan13762/Simple-CRUD</a>',
      // },
      // {
      //   icon: <FaVideo />,
      //   title: "Demo Video : ",
      //   desc: `<a href=${Video2}>CRUD-Demo</a>`,
      // },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
