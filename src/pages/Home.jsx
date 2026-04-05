import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Zap, Users } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'
import TechStack from '../components/TechStack'
import andre from '../assets/andre.jpg'

function Home() {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Código Limpo',
      description: 'Escrevo código limpo, bem estruturado e fácil de manter.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Otimizo aplicações para melhor desempenho e velocidade.',
    },
    {
      icon: <Users size={32} />,
      title: 'Colaboração',
      description: 'Trabalho bem em equipe e adepto às metodologias ágeis.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div>
      <ParticleBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              Olá, sou <span className="text-gradient">André Judião</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-4"
              variants={itemVariants}
            >
              (Ander.Dev)
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Desenvolvedor <span className="highlight">Full Stack</span> com experiência sólida em <span className="highlight">Front-end</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link to="/projetos" className="btn btn-primary">
                Ver Projetos
                <ArrowRight size={20} />
              </Link>
              <Link to="/contato" className="btn btn-secondary">
                Entrar em Contato
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Sobre Mim</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* About Image */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-80 h-80 mx-auto rounded-full border-4 border-primary overflow-hidden bg-dark-700">
                <img
                  src={andre}
                  alt="André Judião"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* About Content */}
            <div className="space-y-6 text-gray-300">
              <p>
                Sou um desenvolvedor <strong>full stack</strong>, com foco em <strong>front-end</strong> e experiência sólida em <strong>back-end</strong>. Adoro criar interfaces elegantes e funcionais, enquanto aplico meu conhecimento de servidor para construir aplicações completas e bem estruturadas.
              </p>

              <p>
                Como um verdadeiro <strong>nerd/geek</strong>, adoro explorar novas tecnologias, enfrentar desafios complexos e criar soluções criativas que combinem estética, usabilidade e performance. Acredito que código limpo e bem estruturado é a base de qualquer projeto de sucesso.
              </p>

              <p>
                Minha jornada começou com curiosidade sobre como as coisas funcionam "por trás dos panos", e hoje transformo ideias em experiências digitais envolventes através do código.
              </p>

              <Link to="/contato" className="inline-block btn btn-primary mt-6">
                Vamos Trabalhar Juntos
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Por que trabalhar comigo?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-dark-700/50 border border-primary/10 p-8 rounded-xl text-center card-hover"
                variants={itemVariants}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies & Tools Section */}
      <section className="py-20 px-4 md:px-8 bg-dark-800/50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tecnologias e Ferramentas
          </motion.h2>

          <TechStack />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para o próximo projeto?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Entre em contato comigo e vamos transformar suas ideias em realidade.
          </p>
          <Link to="/contato" className="btn btn-primary">
            Vamos Começar
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
