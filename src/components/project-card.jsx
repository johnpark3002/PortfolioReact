import "../styles/project-card.css";

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
            <div className="card-back-name">
            </div>
            <div className="card-back-description">
              <span>Description: </span>
              {project.description}
            </div>
            <div className="card-back-technologies">
              <span>Technologies Used: </span>
              {project.technologies}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
