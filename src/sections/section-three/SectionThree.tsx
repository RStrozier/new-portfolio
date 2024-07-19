import { FiChevronDown } from "react-icons/fi";
import projectData from "../../data/projects.json";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <>
      <div className="page-section section-three">
        <div className="projects-title bona-nova-sc-regular">My Projects:</div>
        <div className="mini-spacer"></div>
        <div className="project-container">
          <div className="mediumContainer">
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
                      {project.name} ({project.year})
                    </a>
                  </div>
                </div>
              </>
            ))}
            <div className="down-arrow-container">
              <FiChevronDown size={60} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
