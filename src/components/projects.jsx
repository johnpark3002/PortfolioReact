import "../styles/projects.css";
import ProjectCard from "./project-card";
import projectsList from "../data/past-projects";
import translations from "../data/translations";
import { useLanguage } from "../languageContext";
import { useState, useEffect } from "react";

export default function Projects() {
  const { language } = useLanguage();

  const projects = projectsList[language].projects;

  const [index, setIndex] = useState(0); // Track the current slide index
  const [projectsPerSlide, setProjectsPerSlide] = useState(3);
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  useEffect(() => {
    const updateProjectsPerSlide = () => {
      if (window.innerWidth <= 600) {
        setProjectsPerSlide(1);
      } else {
        setProjectsPerSlide(3);
      }
    };

    updateProjectsPerSlide();

    window.addEventListener("resize", updateProjectsPerSlide);

    return () => {
      window.removeEventListener("resize", updateProjectsPerSlide);
    };

  }, []);

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  // Get the projects for the current slide
  const visibleProjects = projects.slice(
    index * projectsPerSlide,
    (index + 1) * projectsPerSlide
  );

  return (
    <div className="projects">
      <span>{translations[language].projects}</span>
      <div className="carousel-container">
        <button
          className="carousel-button"
          onClick={handlePrevious}
          disabled={totalSlides <= 1}
        >
          {`<`}
        </button>
        <div className="carousel-track">
          <ProjectCard projects={visibleProjects}></ProjectCard>
        </div>
        <button
          className="carousel-button"
          onClick={handleNext}
          disabled={totalSlides <= 1}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
}
