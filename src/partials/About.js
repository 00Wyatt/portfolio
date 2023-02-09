import about from "../data/about.json"
import skills from "../data/skills.json"
import SVG from "../components/SVGs";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="bio">
          <div className="header">
            <h2>A bit about me.</h2>
          </div>
          <div className="text-block">
            {about && about.map(paragraph => (
              <p key={paragraph.id}>
                {paragraph.content}
              </p>
            ))}
          </div>
        </div>
        <div className="skills">
          <div className="header">
            <h2>Things I can do.</h2>
          </div>
          <div className="skill-grid">
            {skills && skills.map(skill => (
              <div className="skill" key={skill.name}>
                <div className="image">
                  <SVG type={skill.logo || skill.name} width={'40'} />
                </div>
                <p className="name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
