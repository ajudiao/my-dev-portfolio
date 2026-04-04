import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'

function ArticleDetail() {
  const { id } = useParams()

  const blogPosts = [
    {
      id: 1,
      title: 'Introdução ao Spring Boot',
      excerpt: 'Aprenda como começar com Spring Boot e criar sua primeira aplicação REST.',
      date: '15 de Dezembro, 2024',
      category: 'Back-end',
      author: 'André Judião',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
      readTime: '8 min',
      content: `
        <h2>O que é Spring Boot?</h2>
        <p>Spring Boot é um framework Java que simplifica o desenvolvimento de aplicações baseadas em Spring. Ele oferece uma maneira rápida e fácil de criar aplicações Spring prontas para produção.</p>

        <h3>Benefícios do Spring Boot</h3>
        <ul>
          <li>Configuração automática inteligente</li>
          <li>Servidor incorporado (Tomcat, Jetty, etc.)</li>
          <li>Dependências pré-configuradas (starters)</li>
          <li>Pronto para produção</li>
          <li>Sem geração de código ou configuração XML</li>
        </ul>

        <h3>Primeiros Passos</h3>
        <p>Para começar com Spring Boot, você precisa ter Java instalado e conhecimento básico de programação orientada a objetos.</p>

        <p>O framework utiliza anotações como @SpringBootApplication, @RestController e @RequestMapping para simplificar a configuração de suas aplicações.</p>

        <h3>Conclusão</h3>
        <p>Spring Boot é uma excelente escolha para desenvolvedores Java que desejam criar aplicações web robustas e escaláveis rapidamente.</p>
      `,
    },
    {
      id: 2,
      title: 'React Hooks: State e Effects',
      excerpt: 'Entenda como usar React Hooks para gerenciar estado e efeitos em seus componentes.',
      date: '12 de Dezembro, 2024',
      category: 'Front-end',
      author: 'André Judião',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop',
      readTime: '10 min',
      content: `
        <h2>Entendendo React Hooks</h2>
        <p>React Hooks são funções que permitem você "conectar" aos recursos do React. Eles foram introduzidos no React 16.8 e revolucionaram a forma como escrevemos componentes.</p>

        <h3>useState Hook</h3>
        <p>O hook useState permite adicionar estado a componentes funcionais. É a forma mais simples de gerenciar estado em React.</p>

        <h3>useEffect Hook</h3>
        <p>O hook useEffect permite executar efeitos colaterais em componentes funcionais. Use-o para buscar dados, inscrever-se a um serviço ou atualizar o DOM manualmente.</p>

        <h3>Outros Hooks Importantes</h3>
        <ul>
          <li>useContext - Para acessar contexto sem envolvimento</li>
          <li>useReducer - Para gerenciar estado complexo</li>
          <li>useCallback - Para memorizar callbacks</li>
          <li>useMemo - Para memorizar valores computados</li>
          <li>useRef - Para acessar o DOM diretamente</li>
        </ul>

        <h3>Conclusão</h3>
        <p>React Hooks simplificam o desenvolvimento de componentes React e tornam o código mais legível e reutilizável.</p>
      `,
    },
    {
      id: 3,
      title: 'Design Responsivo com Tailwind CSS',
      excerpt: 'Dicas e truques para criar layouts responsivos e elegantes com Tailwind CSS.',
      date: '8 de Dezembro, 2024',
      category: 'Front-end',
      author: 'André Judião',
      image: 'https://images.unsplash.com/photo-1576628346281-bb2b276e3a4e?w=800&h=400&fit=crop',
      readTime: '6 min',
      content: `
        <h2>Tailwind CSS para Design Responsivo</h2>
        <p>Tailwind CSS é um framework CSS utilitário que permite criar designs responsivos rapidamente sem sair do seu HTML.</p>

        <h3>Mobile-First Approach</h3>
        <p>Tailwind segue a abordagem mobile-first, o que significa que você começa a estilizar para dispositivos móveis e depois adiciona estilos para telas maiores.</p>

        <h3>Breakpoints</h3>
        <p>Os breakpoints padrão do Tailwind são: sm (640px), md (768px), lg (1024px), xl (1280px) e 2xl (1536px).</p>

        <h3>Benefícios</h3>
        <ul>
          <li>Desenvolvimento rápido</li>
          <li>Tamanho de arquivo pequeno</li>
          <li>Facilmente customizável</li>
          <li>Comunidade ativa</li>
          <li>Documentação excelente</li>
        </ul>

        <h3>Conclusão</h3>
        <p>Tailwind CSS é uma ferramenta poderosa para criar designs responsivos e modernos com facilidade.</p>
      `,
    },
    {
      id: 4,
      title: 'Segurança em APIs RESTful',
      excerpt: 'Implemente autenticação JWT e outras práticas de segurança em suas APIs.',
      date: '5 de Dezembro, 2024',
      category: 'Back-end',
      author: 'André Judião',
      image: 'https://images.unsplash.com/photo-1516389573885-cdc6b3fbf200?w=800&h=400&fit=crop',
      readTime: '12 min',
      content: `
        <h2>Segurança em APIs RESTful</h2>
        <p>A segurança é crítica ao desenvolver APIs RESTful. Existem várias práticas e técnicas que você pode implementar para proteger seus dados.</p>

        <h3>Autenticação com JWT</h3>
        <p>JWT (JSON Web Tokens) é um padrão aberto que define uma forma compacta e autossuficiente de transmitir informações entre partes como um objeto JSON.</p>

        <h3>HTTPS/SSL</h3>
        <p>Sempre use HTTPS para criptografar dados em trânsito. SSL/TLS fornece uma camada de segurança entre cliente e servidor.</p>

        <h3>Rate Limiting</h3>
        <p>Implemente rate limiting para proteger suas APIs contra ataques de força bruta e abuso.</p>

        <h3>Validação de Entrada</h3>
        <ul>
          <li>Valide todos os dados de entrada</li>
          <li>Use whitelist sempre que possível</li>
          <li>Escape dados adequadamente</li>
          <li>Use prepared statements para consultas SQL</li>
        </ul>

        <h3>Conclusão</h3>
        <p>Implementar boas práticas de segurança é essencial para proteger seus usuários e dados.</p>
      `,
    },
    {
      id: 5,
      title: 'Performance: Otimizando Queries SQL',
      excerpt: 'Técnicas avançadas para otimizar suas consultas SQL e melhorar performance.',
      date: '1 de Dezembro, 2024',
      category: 'Back-end',
      author: 'André Judião',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop',
      readTime: '11 min',
      content: `
        <h2>Otimizando Queries SQL</h2>
        <p>A performance de uma aplicação frequentemente depende de quão eficiente são suas queries SQL. Aqui estão algumas técnicas para otimizá-las.</p>

        <h3>Índices</h3>
        <p>Criar índices nas colunas que você frequentemente usa em cláusulas WHERE, JOIN e ORDER BY pode melhorar drasticamente a performance.</p>

        <h3>Avoid N+1 Queries</h3>
        <p>O problema N+1 ocorre quando você faz uma query para obter uma lista de itens e depois uma query adicional para cada item. Use JOINs sempre que possível.</p>

        <h3>Selecione Apenas as Colunas Necessárias</h3>
        <p>Em vez de usar SELECT *, especifique apenas as colunas que você realmente precisa.</p>

        <h3>Use EXPLAIN</h3>
        <p>O comando EXPLAIN mostra como o banco de dados executa uma query, ajudando você a identificar gargalos.</p>

        <h3>Conclusão</h3>
        <p>Otimizar suas queries SQL é fundamental para construir aplicações de alta performance.</p>
      `,
    },
    {
      id: 6,
      title: 'WebSocket em Tempo Real com Java',
      excerpt: 'Construa aplicações em tempo real usando WebSocket com Spring Boot.',
      date: '28 de Novembro, 2024',
      category: 'Back-end',
      author: 'André Judião',
      image: 'https://images.unsplash.com/photo-1516389573885-cdc6b3fbf200?w=800&h=400&fit=crop',
      readTime: '9 min',
      content: `
        <h2>WebSocket com Spring Boot</h2>
        <p>WebSocket fornece uma conexão bidirecional de dupla mão sobre uma única conexão TCP, permitindo comunicação em tempo real entre cliente e servidor.</p>

        <h3>Configuração Básica</h3>
        <p>Spring Boot facilita a configuração de WebSockets com a anotação @EnableWebSocketMessageBroker e a classe WebSocketMessageBrokerConfigurer.</p>

        <h3>Casos de Uso</h3>
        <ul>
          <li>Chat em tempo real</li>
          <li>Notificações push</li>
          <li>Colaboração em tempo real</li>
          <li>Dashboards ao vivo</li>
          <li>Streaming de dados</li>
        </ul>

        <h3>Segurança</h3>
        <p>Implemente autenticação e autorização adequadas para WebSocket. Configure CSRF protection e valide todas as mensagens recebidas.</p>

        <h3>Conclusão</h3>
        <p>WebSocket é uma ferramenta poderosa para criar aplicações interativas em tempo real com Java e Spring Boot.</p>
      `,
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
