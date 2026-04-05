import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'

function ArticleDetail() {
  const { id } = useParams()

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

  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="pt-32 pb-20 px-4 md:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="btn btn-primary">
            Voltar ao Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-semibold"
          >
            <ArrowLeft size={18} />
            Voltar ao Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="tech-tag">{post.category}</span>
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <Clock size={16} />
              {post.readTime} de leitura
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pb-8 border-b border-primary/20">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <User size={24} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold text-white">{post.author}</p>
              <p className="text-sm text-gray-400">Desenvolvedor Web</p>
            </div>
          </div>
        </motion.div>

        {/* Article Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 rounded-xl overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none mb-12"
        >
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-y border-primary/20 flex items-center gap-4"
        >
          <span className="font-semibold text-white">Compartilhar:</span>
          <button className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300 text-primary">
            <Share2 size={20} />
          </button>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== parseInt(id) && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-dark-700/50 border border-primary/10 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary uppercase font-semibold">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-semibold text-white mt-2 group-hover:text-primary transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      {relatedPost.readTime} de leitura
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ArticleDetail
