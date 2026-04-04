import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <motion.article
      className="bg-dark-700 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 card-hover"
      whileHover={{ y: -5 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 bg-dark-600">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 btn btn-secondary text-sm"
              aria-label="Ver código"
            >
              <Github size={18} />
              Código
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 btn btn-primary text-sm"
              aria-label="Ver demo"
            >
              <ExternalLink size={18} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
