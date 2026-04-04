import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'React Hooks: State e Effects',
      excerpt: 'Entenda como usar React Hooks para gerenciar estado e efeitos em seus componentes.',
      date: '12 de Dezembro, 2025',
      category: 'Front-end',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaN3Kl_NWhYvkhhxPgxkx_-QiWUiTUMF8FA&s',
      readTime: '10 min',
    },
    {
      id: 2,
      title: 'Design Responsivo com Tailwind CSS',
      excerpt: 'Dicas e truques para criar layouts responsivos e elegantes com Tailwind CSS.',
      date: '03 de Janeiro, 2026',
      category: 'Front-end',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9S8fWpeNbB7pmx41vExmLuHt3a35erstzg&s',
      readTime: '6 min',
    },
    {
      id: 3,
      title: 'Segurança em APIs RESTful',
      excerpt: 'Implemente autenticação JWT e outras práticas de segurança em suas APIs.',
      date: '10 de Janeiro, 2026',
      category: 'Back-end',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVGMDcr5GtN4xi1Zt2MaRt0NMbrGypYU0ZA&s',
      readTime: '12 min',
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

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
            >
              <motion.article
                className="bg-dark-700/50 border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 card-hover h-full flex flex-col group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Post Image */}
                <motion.div
                  className="overflow-hidden rounded-t-xl h-48 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="tech-tag">{post.category}</span>
                  </div>
                </motion.div>

                {/* Post Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar size={16} />
                      {post.date}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                      <span className="font-semibold text-sm">Ler</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
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
