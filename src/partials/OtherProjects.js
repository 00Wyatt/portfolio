import projects from "../data/other-projects.json"

export default function OtherProjects() {
  return (
    <div className="other-projects">
      <div className="header">
        <div className="container">
          <h2>Other Projects</h2>
        </div>
      </div>
      <div className="content">
        {projects && projects.map(project => (
          <div className="wrapper" key={project.id}>
            <div className="project">
              <div className="image"></div>
              <div className="text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
