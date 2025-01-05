import { motion } from "framer-motion";
import projects from "../data/other-projects.json";
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";
import Shapes from "../components/Shapes";
import toDoList from "../assets/images/to-do-list.png";
import pokeball from "../assets/images/pokeball.png";
import frontendMentor from "../assets/images/frontend-mentor.png";

const shapesList = [
	"block1",
	"triangle1",
	"triangle2",
	"semicircle1",
	"semicircle2",
];
const images = [pokeball, toDoList, frontendMentor];

export default function OtherProjects() {
	return (
		<motion.section
			className="other-projects"
			variants={variants.contentFadeIn}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}>
			<Shapes shapesList={shapesList} />
			<div className="header">
				<div className="container">
					<h2>Other Projects</h2>
				</div>
			</div>
			<div className="content">
				{projects &&
					projects.map(project => (
						<div className="wrapper" key={project.id}>
							<div className="project">
								<div className="image-wrapper">
									<a
										href={project.siteLink}
										target="_blank"
										rel="noopener noreferrer">
										<img
											src={images[project.imageId]}
											alt={project.imageAlt}
										/>
										<div className="image-overlay"></div>
									</a>
								</div>
								<div className="text">
									<h3>
										<a
											className="site-link"
											href={project.siteLink}
											target="_blank"
											rel="noopener noreferrer">
											{project.title}
										</a>
									</h3>
									<p>{project.description}</p>
									<div className="icon-links">
										<a
											className="icon"
											href={project.siteLink}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="View Site"
											title="View Site">
											<SVG type="BoxArrow" />
										</a>
										<a
											className="icon"
											href={project.repoLink}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="GitHub"
											title="GitHub">
											<SVG type="GitHub" />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</motion.section>
	);
}
