import BudgetApp from "../images/budget-management-application.jpg";
import iPhoneApp from "../images/iphone-application-development.jpg";
import LibraryApp from "../images/library-management-website.png";
import AutonomousRobot from "../images/autonomous-robot-project.png";
import PourDecisions from "../images/pourdecisions-website.png";
import LeagueOfLegends from "../images/league-of-legends.jpg";

const projectsList = {
  en: {
    projects: [
      {
        id: 5,
        image: LeagueOfLegends,
        alt: "League of Legends",
        name: "League of Legends eSports Prediction Model",
        description:
          "Developed a machine learning model using Python and Scikit-learn to predict the outcome of League of Legends eSports matches with a precision of over 90%.",
        technologies: "Python, Jupyter Notebook, Pandas, Scikit Learn, Random Forest Classifier",
        url: "https://github.com/johnpark3002/prediction-ml-lol",
      },
      {
        id: 4,
        image: BudgetApp,
        alt: "An AI-generated image of a budget management application.",
        name: "Budget Management Application",
        description:
          "Developed a web application to streamline budget management. Implemented features to optimize user experience and ensure efficient data storage.",
        technologies:
          "React.js, Spring Boot, Microsoft SQL Server, KendoReact UI, Java, and role-based access control.",
      },
      {
        id: 3,
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
        id: 1,
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
        id: 0,
        image: AutonomousRobot,
        alt: "An image depicting the autonomous robot developed for the ECSE 211 course (Design Principles and Methods) at McGill University during the Fall 2020 semester.",
        name: "Autonomous Robot",
        description:
          "Designed and programmed a virtual robot for a competition. Implemented control algorithms for navigation and obstacle avoidance.",
        technologies:
          "Java, Webots, LeoCAD, sensors for environmental data collection.",
      },
    ],
  },
  fr: {
    projects: [
      {
        id: 5,
        image: LeagueOfLegends,
        alt: "League of Legends",
        name: "Modèle de Prédiction pour l'eSport de League of Legends",
        description:
          "Développement d'un modèle de machine learning en Python et Scikit-learn pour prédire l'issue de matchs d'eSports de League of Legends avec une précision de plus de 90%.",
        technologies: "Python, Jupyter Notebook, Pandas, Scikit Learn, Classificateur de forêt aléatoire",
        url: "https://github.com/johnpark3002/prediction-ml-lol",
      },
      {
        id: 4,
        image: BudgetApp,
        alt: "Une image générée par IA d'une application de gestion budgétaire.",
        name: "Application de gestion de budget",
        description:
          "Développé une application web pour simplifier la gestion des budgets. Mise en œuvre de fonctionnalités pour optimiser l'expérience utilisateur et garantir une gestion efficace des données.",
        technologies:
          "React.js, Spring Boot, Microsoft SQL Server, KendoReact UI, Java et contrôle d'accès basé sur les rôles.",
      },
      {
        id: 3,
        image: iPhoneApp,
        alt: "Une image générée par IA d'un iPhone.",
        name: "Assistance à la navigation guidée par vision pour les malvoyants",
        description:
          "Création d'un système de navigation intelligent pour les malvoyants, utilisant un modèle YOLO pour détecter les abribus. La solution fournit des retours audio et haptiques via une application mobile.",
        technologies:
          "Python, YOLO pour l'apprentissage automatique, iPhone pour le développement mobile.",
      },
      {
        id: 2,
        image: PourDecisions,
        alt: "Une image de la page principale du site Web PourDecisions, dévelopé pour le cours de ECSE 428 (Software Engineering Practice) à l'univerisité McGill pendant la session hiver 2022.",
        name: "PourDecisions",
        description:
          "Création d'un générateur de recettes de cocktails avec une interface utilisateur interactive. Les utilisateurs peuvent rechercher des recettes par ingrédient ou type d'alcool, alimenté par une API backend.",
        technologies: "MERN Stack (MongoDB, Express.js, React, Node.js).",
        url: "https://github.com/nielsmai/PourDecisions",
      },
      {
        id: 1,
        image: LibraryApp,
        alt: "Une image du site Web de gestion de bibliothèque, développé pour le cours de ECSE 321 (Intro to Software Engineering) à l'université McGill pendant la session automne 2021.",
        name: "Site Web de gestion de bibliothèque",
        description:
          "Développé un système de gestion de bibliothèque permettant aux utilisateurs de rechercher et d'emprunter des livres. Intégration d'une interface responsive et d'un backend robuste pour gérer les utilisateurs et les données.",
        technologies:
          "Java, Spring Framework, Vue.js, Android Studio, PostgreSQL, HTML, CSS, JavaScript.",
        url: "https://github.com/McGill-ECSE321-Fall2021/project-group-02",
      },
      {
        id: 0,
        image: AutonomousRobot,
        alt: "Une image représentant un robot autonome développé pour le cours de ECSE 211 (Design Principles and Methods) à l'université McGill pendant la session automne 2020.",
        name: "Robot autonome",
        description:
          "Conception et programmation d'un robot virtuel pour une compétition. Mise en œuvre d'algorithmes de contrôle pour la navigation et l'évitement d'obstacles.",
        technologies:
          "Java, Webots, LeoCAD, capteurs pour la collecte de données environnementales.",
      },
    ],
  },
};

export default projectsList;
