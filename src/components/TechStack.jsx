import { motion } from 'framer-motion'

const TechStack = () => {
  const technologies = [
    {
      name: 'React JS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      name: 'Node JS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Next JS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Express',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    },
    {
      name: 'PHP',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    },
    {
      name: 'Styled Components',
      logo: 'https://styled-components.com/logo.png',
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    },
    {
      name: 'API REST',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
    },
    {
      name: 'Figma',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    },
  ]

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          variants={itemVariants}
          className="group flex flex-col items-center justify-center"
        >
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 bg-dark-700/50 border border-primary/20 rounded-xl flex items-center justify-center card-hover group-hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.1, borderColor: 'var(--color-primary)' }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
            />
          </motion.div>
          <p className="text-xs md:text-sm text-gray-400 text-center mt-3 group-hover:text-primary transition-colors duration-300">
            {tech.name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TechStack
