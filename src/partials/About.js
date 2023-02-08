import skills from "../components/Skills"
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
            <p>I began my coding journey with the goal of starting a new career, having previously been studying and working in the music industry. I started out as self-taught using a mix of free and paid online resources to learn web development. Halfway through 2022 I enrolled into a Diploma of Information Technology in Front End Development at North Metropolitan TAFE.</p>
            <p>I have since expanded my coding skills and gained valuable knowledge in many other areas including liaising with clients, managing and delivering projects, and working within a team. I am currently seeking an opportunity to use my abilities to contribute to an organisation and develop further in a professional environment. My studies conclude midway through 2023, and I am open to working in a part-time role or similar until I am fully available.</p>
            <p>When I’m not writing code, I usually enjoy getting outdoors with my camera, and I’m either hiking in summer, or snowboarding in winter. I have a passion for learning new things and avidly read as widely as I can.</p>
          </div>
        </div>
        <div className="skills">
          <div className="header">
            <h2>Things I can do.</h2>
          </div>
          <div className="skill-grid">
            {skills.map(skill => (
              <div className="skill">
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
