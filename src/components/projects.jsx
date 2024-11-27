import "../styles/projects.css";
import ProjectCard from "./project-card";
import { projects } from "../data/past-projects";

export default function Projects() {
  return (
    <div className="projects">
      <span>Projects</span>
      <ProjectCard projects={projects}></ProjectCard>
    </div>
  );
}
