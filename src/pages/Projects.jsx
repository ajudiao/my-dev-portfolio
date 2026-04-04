import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce API',
      description: 'API RESTful completa para e-commerce com autenticação JWT, gerenciamento de produtos e processamento de pedidos.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      category: 'backend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'Sistema de gerenciamento de tarefas com interface moderna, drag & drop e sincronização em tempo real.',
      image: 'https://images.unsplash.com/photo-1555952494-6ef4c3e37753?w=500&h=300&fit=crop',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 3,
      title: 'Blog CMS',
      description: 'Sistema de gerenciamento de conteúdo para blogs com editor WYSIWYG e sistema de comentários.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      technologies: ['PHP', 'Bootstrap', 'MySQL'],
      category: 'backend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Aplicação de previsão do tempo com geolocalização, gráficos interativos e design responsivo.',
      image: 'https://images.unsplash.com/photo-1507238691854-564bedd34d4d?w=500&h=300&fit=crop',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 5,
      title: 'Chat App',
      description: 'Aplicação de chat em tempo real com salas privadas, emojis e notificações push.',
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=300&fit=crop',
      technologies: ['Java', 'WebSocket', 'React'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 6,
      title: 'Portfolio Site',
      description: 'Site portfólio responsivo com animações, tema escuro/claro e otimização SEO.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
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
