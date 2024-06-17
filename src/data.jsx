import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaVideo,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { SiNetlify, SiRender } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/todo.jpg";
import Work3 from "./assets/crud.jpg";
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

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Karthikeyan",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "M",
  },

  {
    id: 3,
    title: "Age : ",
    description: "26 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  // {
  //   id: 5,
  //   title: 'Address : ',
  //   description: '3/398-B Kalaivanar 1st Street Dinamani Nagar Madurai-625018',
  // },

  {
    id: 6,
    title: "Phone : ",
    description: "9345064663",
  },

  {
    id: 7,
    title: "Email : ",
    description: "karthikeya3762@gmail.com",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Tamil, English",
  },
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
    category: "experience",
    icon: <FaBriefcase />,
    year: "08/2023- 03/2024",
    title: "MERN Stack Course Experience <span>GUVI</span> ",
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
        icon: <SiRender />,
        title: "Render : ",
        desc: '<a href="https://ecommerce-kcart8.onrender.com/">https://ecommerce-kcart8.onrender.com</a>',
      },
      {
        icon: <FaGithub />,
        title: "Git-hub : ",
        desc: '<a href="https://github.com/karthikeyan13762/ecommerce-kcart">https://github.com/karthikeyan13762/ecommerce-kcart</a>',
      },
    ],
  },
  {
    id: 2,
    img: Work2,
    title: "TODO List",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Todo List using MERN Stack ",
      },

      {
        icon: <FaCode />,
        title: "Technologies : ",
        desc: "React,CSS,Node.js,Express.js,Mongo DB",
      },
      {
        icon: <SiNetlify />,
        title: "Netlify : ",
        desc: '<a href="https://todo-app-88.netlify.app">https://todo-app-88.netlify.app</a>',
      },
      {
        icon: <FaGithub />,
        title: "Git-hub : ",
        desc: '<a href="https://github.com/karthikeyan13762/todo-frontend">https://github.com/karthikeyan13762/todo-frontend</a>',
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
    img: Work3,
    title: "CRUD Operation",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "CRUD using REACT",
      },

      {
        icon: <FaCode />,
        title: "Technologies : ",
        desc: "React,CSS",
      },
      {
        icon: <SiNetlify />,
        title: "Netlify : ",
        desc: '<a href="https://react-simple-crud-8.netlify.app">https://react-simple-crud-8.netlify.app</a>',
      },
      {
        icon: <FaGithub />,
        title: "Git-hub : ",
        desc: '<a href="https://github.com/karthikeyan13762/Simple-CRUD">https://github.com/karthikeyan13762/Simple-CRUD</a>',
      },
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
