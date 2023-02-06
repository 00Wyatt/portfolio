import BrickByBrick from "./BrickByBrick";
import OtherProjects from "./OtherProjects";
import ProjectThree from "./ProjectThree";
import ProjectTwo from "./ProjectTwo";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <BrickByBrick />
      <ProjectTwo />
      <ProjectThree />
      <OtherProjects />
    </section>
  )
}
