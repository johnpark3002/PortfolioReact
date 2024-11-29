import "../styles/project-card.css";
import github from "../images/github-logo.svg";

export default function ProjectCard(props) {
  const projects = props.projects;

  return (
    <div className="card-container">
      {projects.map((project) => (
        <div key={project.id} className="card">
          <div className="card-front">
            <div className="card-front-image">
              <img src={project.image} alt={project.alt}></img>
            </div>
            <div className="card-front-title">
              <span>{project.name}</span>
            </div>
          </div>
          <div className="card-back">
            <div className="card-back-description">
              <span>Description: </span>
              {project.description}
            </div>
            <div className="card-back-technologies">
              <span>Technologies Used: </span>
              {project.technologies}
            </div>
            {project.url && (
              <div className="card-back-github-logo">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={github}
                    alt="Github logo with links to the corresponding project."
                  ></img>
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
