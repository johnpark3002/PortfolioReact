import "../styles/projects.css";
import ProjectCard from "./project-card";
import projectsList from "../data/past-projects";
import translations from "../data/translations";
import { useLanguage } from "../languageContext";

export default function Projects() {
  const { language } = useLanguage();

  const projects = projectsList[language].projects;

  return (
    <div className="projects">
      <span>{translations[language].projects}</span>
      <ProjectCard projects={projects}></ProjectCard>
    </div>
  );
}
