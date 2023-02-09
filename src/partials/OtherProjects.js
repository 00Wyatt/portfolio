import projects from "../data/other-projects.json"
import { motion } from "framer-motion";

export default function OtherProjects() {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
    hidden: { opacity: 0, y: 50 }
  }

  return (
    <motion.div className="other-projects"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
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
    </motion.div>
  )
}
//   return (
//     <div className="other-projects">
//       <div className="header">
//         <div className="container">
//           <motion.h2
//             variants={variants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//           >
//             Other Projects</motion.h2>
//         </div>
//       </div>
//       <div className="content">
//         {projects && projects.map(project => (
//           <div className="wrapper" key={project.id}>
//             <motion.div className="project"
//               variants={variants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//             >
//               <div className="image"></div>
//               <div className="text">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
