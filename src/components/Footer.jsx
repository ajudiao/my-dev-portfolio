import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Ander.Dev</h3>
            <p className="text-gray-400 mb-6">
              Crio experiências digitais com Front-end moderno e Full Stack sólido
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ajudiao"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 text-primary p-3 rounded-lg hover:bg-primary hover:text-dark-900 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/andr%C3%A9-judi%C3%A3o-20b63434b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 text-primary p-3 rounded-lg hover:bg-primary hover:text-dark-900 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:andrejudiao@gmail.com"
                className="bg-primary/10 text-primary p-3 rounded-lg hover:bg-primary hover:text-dark-900 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Projetos', path: '/projetos' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contato', path: '/contato' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-3 text-gray-400">
              <p>Email: andrejudiao@gmail.com</p>
              <p>Localização: Angola</p>
              <p>Disponível para projetos freelance</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Ander.Dev. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary/10 text-primary p-3 rounded-lg hover:bg-primary hover:text-dark-900 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
