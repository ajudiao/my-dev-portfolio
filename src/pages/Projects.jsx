import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import websitecfitel from '../assets/projects-img/websitecfitel.png'
import redstore from '../assets/projects-img/redstore.png'


function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Website CFITEL',
      description: 'Website institucional desenvolvido para o CFITEL — Centro de Formação dedicado ao desenvolvimento profissional e técnico de estudantes e trabalhadores.',
      image: websitecfitel,
      technologies: ['HTML', 'CSS', 'JS'],
      category: 'frontend',
      github: 'https://github.com/ajudiao/website-cfitel',
      demo: 'https://ajudiao.github.io/website-cfitel/',
    },
    {
      id: 2,
      title: 'App Pomodoro',
      description: 'A aplicação ajuda a organizar o tempo de estudo ou trabalho utilizando a técnica Pomodoro, com interface limpa e responsiva.',
      image: 'https://raw.githubusercontent.com/ajudiao/app-pomodoro/refs/heads/main/src/assets/pomodoro-preview.png',
      technologies: ['React', 'Styled Components', 'TypeScript'],
      category: 'frontend',
      github: 'https://github.com/ajudiao/app-pomodoro',
      demo: 'https://indisponivel.com',
    },
    {
      id: 3,
      title: 'RedStore UI',
      description: 'Este projeto consiste no desenvolvimento da interface de um website de e-commerce, utilizando apenas HTML, CSS e JavaScript.',
      image: redstore,
      technologies: ['HTML', 'CSS', 'JS'],
      category: 'frontend',
      github: 'https://github.com/ajudiao/redstore-ecommerce-ui',
      demo: 'https://ajudiao.github.io/redstore-ecommerce-ui/',
      },
  ]

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Front-end' },
    { id: 'backend', label: 'Back-end' },
    { id: 'fullstack', label: 'Full-stack' },
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meus <span className="text-gradient">Projetos</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Aqui você pode ver uma seleção dos meus projetos mais recentes e interessantes.
            Cada projeto reflete meu compromisso com qualidade, inovação e excelência.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-dark-900'
                  : 'bg-dark-700 text-gray-300 border border-primary/20 hover:border-primary hover:text-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-400">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects
