import projectData from "../../data/projects.json";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <>
      <div className="page-section">
        <div className="projects-title bona-nova-sc-regular">My Projects:</div>
        <div className="mini-spacer"></div>
        <div className="project-container">
          <div className="center-container">
            {projectData.map((project, index) => (
              <>
                <div className="project-item">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />

                  <div key={index}>
                    <a
                      href={project.githubLink}
                      //   target: allows them to open this in a new window rel: new page has no access to old
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="project-details merriweather-bold">
                        {project.name} ({project.year})
                      </div>
                    </a>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        
        <div className="spacer"></div>
      </div>
    </>
  );
};

export default MyProjects;
