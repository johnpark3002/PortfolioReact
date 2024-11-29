import BudgetApp from "../images/budget-management-application.jpg";
import iPhoneApp from "../images/iphone-application-development.jpg";
import LibraryApp from "../images/library-management-website.png";
import AutonomousRobot from "../images/autonomous-robot-project.png";
import PourDecisions from "../images/pourdecisions-website.png";

export const projects = [
  {
    id: 0,
    image: BudgetApp,
    alt: "An AI-generated image of a budget management application.",
    name: "Budget Management Application",
    description:
      "Developed a web application to streamline budget management and enhance data security. Implemented features to optimize user experience and ensure efficient data storage.",
    technologies:
      "React.js, Spring Boot, Microsoft SQL Server, KendoReact UI, Java, and role-based access control.",
  },
  {
    id: 1,
    image: iPhoneApp,
    alt: "An AI-generated image of an iPhone.",
    name: "Vision-guided Navigation Assistance for the Visually Impaired",
    description:
      "Created a smart navigation system for the visually impaired, leveraging a YOLO-based model to detect bus shelters. The solution provided audio and haptic feedback through a mobile app.",
    technologies:
      "Python, YOLO for machine learning, iPhone for mobile development.",
  },
  {
    id: 2,
    image: PourDecisions,
    alt: "An image of the homepage of the PourDecisions website, developed for the ECSE 428 course (Software Engineering Practice) at McGill University during the Winter 2022 semester.",
    name: "PourDecisions",
    description:
      "Built a cocktail recipe generator with an interactive user interface. Users could search for recipes by ingredients or alcohol type, powered by a backend API.",
    technologies: "MERN Stack (MongoDB, Express.js, React, Node.js).",
    url: "https://github.com/nielsmai/PourDecisions",
  },
  {
    id: 3,
    image: LibraryApp,
    alt: "An image of the library management website developed for the ECSE 321 course (Intro to Software Engineering) at McGill University during the Fall 2021 semester.",
    name: "Library Management Website",
    description:
      "Developed a library system allowing users to search and borrow books. Integrated a responsive interface and a robust backend to manage users and data.",
    technologies:
      "Java, Spring Framework, Vue.js, Android Studio, PostgreSQL, HTML, CSS, JavaScript.",
    url: "https://github.com/McGill-ECSE321-Fall2021/project-group-02",
  },
  {
    id: 4,
    image: AutonomousRobot,
    alt: "An image depicting the autonomous robot developed for the ECSE 211 course (Design Principles and Methods) at McGill University during the Fall 2020 semester.",
    name: "Autonomous Robot",
    description:
      "Designed and programmed a virtual robot for a competition. Implemented control algorithms for navigation and obstacle avoidance.",
    technologies:
      "Java, Webots, LeoCAD, sensors for environmental data collection.",
  },
];
