import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Introdução ao Spring Boot',
      excerpt: 'Aprenda como começar com Spring Boot e criar sua primeira aplicação REST.',
      date: '15 de Dezembro, 2024',
      category: 'Back-end',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      readTime: '8 min',
    },
    {
      id: 2,
      title: 'React Hooks: State e Effects',
      excerpt: 'Entenda como usar React Hooks para gerenciar estado e efeitos em seus componentes.',
      date: '12 de Dezembro, 2024',
      category: 'Front-end',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
      readTime: '10 min',
    },
    {
      id: 3,
      title: 'Design Responsivo com Tailwind CSS',
      excerpt: 'Dicas e truques para criar layouts responsivos e elegantes com Tailwind CSS.',
      date: '8 de Dezembro, 2024',
      category: 'Front-end',
      image: 'https://images.unsplash.com/photo-1576628346281-bb2b276e3a4e?w=500&h=300&fit=crop',
      readTime: '6 min',
    },
    {
      id: 4,
      title: 'Segurança em APIs RESTful',
      excerpt: 'Implemente autenticação JWT e outras práticas de segurança em suas APIs.',
      date: '5 de Dezembro, 2024',
      category: 'Back-end',
      image: 'https://images.unsplash.com/photo-1516389573885-cdc6b3fbf200?w=500&h=300&fit=crop',
      readTime: '12 min',
    },
    {
      id: 5,
      title: 'Performance: Otimizando Queries SQL',
      excerpt: 'Técnicas avançadas para otimizar suas consultas SQL e melhorar performance.',
      date: '1 de Dezembro, 2024',
      category: 'Back-end',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
      readTime: '11 min',
    },
    {
      id: 6,
      title: 'WebSocket em Tempo Real com Java',
      excerpt: 'Construa aplicações em tempo real usando WebSocket com Spring Boot.',
      date: '28 de Novembro, 2024',
      category: 'Back-end',
      image: 'https://images.unsplash.com/photo-1516389573885-cdc6b3fbf200?w=500&h=300&fit=crop',
      readTime: '9 min',
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meu <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Compartilhando conhecimento sobre desenvolvimento web, boas práticas e tecnologias
            que uso no dia a dia.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-dark-700/50 border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 card-hover"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {/* Post Image */}
                <motion.div
                  className="md:col-span-1 overflow-hidden rounded-lg h-48 md:h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Post Content */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="tech-tag">{post.category}</span>
                      <span className="text-sm text-gray-400 flex items-center gap-2">
                        <Calendar size={16} />
                        {post.date}
                      </span>
                      <span className="text-sm text-gray-400">
                        {post.readTime} de leitura
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300">
                    <span className="font-semibold">Ler artigo</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Receba novos artigos no seu email
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Inscreva-se na minha newsletter para receber os últimos artigos, dicas e insights
            sobre desenvolvimento web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu.email@exemplo.com"
              className="flex-1 px-4 py-3 rounded-lg bg-dark-700 border border-primary/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
            />
            <button className="btn btn-primary">
              Inscrever
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
