import projects from "../data/portfolio.json";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      {projects && projects.map(project => (
        <div className="project" key={project.id}>
          <div className="container">
            <div className={project.id % 2 === 0 ? "content reverse" : "content"}>
              <div className="text-cta">
                <div className="text">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <button className="btn">Learn More</button>
              </div>
            </div>
            <div className="content">
              <div className="image"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
