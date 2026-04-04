import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      label: 'Email',
      value: 'andrejudiao@gmail',
      href: 'mailto:andrejudiao@gmail.com',
    },
    {
      icon: <Phone size={28} />,
      label: 'Telefone',
      value: '+244 944-921-970',
      href: 'tel:+244944921970',
    },
    {
      icon: <MapPin size={28} />,
      label: 'Localização',
      value: 'Angola',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/ajudiao',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/andr%C3%A9-judi%C3%A3o-20b63434b/',
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      href: 'mailto:andrejudiao@gmail.com',
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    try {
      // In a real app, you would send this to a backend
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Vamos <span className="text-gradient">Conversar</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tenho interesse em ouvir sobre seu projeto. Sinta-se livre para me contatar de qualquer
            forma que preferir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold text-white mb-8">
              Informações de Contato
            </h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex gap-4 p-6 bg-dark-700/50 border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 card-hover"
                  variants={itemVariants}
                >
                  <div className="text-primary flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="mt-12"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-700/50 border border-primary/20 text-primary p-4 rounded-lg hover:bg-primary hover:text-dark-900 transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-dark-700/50 border border-primary/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-semibold text-white mb-8">
                Envie-me uma Mensagem
              </h2>

              {submitted ? (
                <motion.div
                  className="bg-secondary/10 border border-secondary/30 rounded-lg p-8 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-secondary text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-400">
                    Obrigado por sua mensagem. Entrarei em contato o mais breve possível.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-white font-semibold mb-3">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full px-6 py-3 bg-dark-800 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-white font-semibold mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-6 py-3 bg-dark-800 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label htmlFor="message" className="block text-white font-semibold mb-3">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Conte-me sobre seu projeto..."
                      rows="6"
                      className="w-full px-6 py-3 bg-dark-800 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full btn btn-primary flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-transparent border-t-dark-900 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-12">Perguntas Frequentes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Qual é o seu tempo de resposta?',
                answer: 'Costumo responder emails e mensagens dentro de 24 horas úteis.',
              },
              {
                question: 'Você trabalha com projetos freelance?',
                answer: 'Sim! Sou especialista em projetos freelance e tempo parcial.',
              },
              {
                question: 'Qual é seu valor de hora/projeto?',
                answer: 'Os valores variam de acordo com a complexidade do projeto. Agende uma conversa para discutir os detalhes.',
              },
              {
                question: 'Você trabalha com equipes?',
                answer: 'Sim, tenho experiência trabalhando em equipes pequenas e grandes usando metodologias ágeis.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-dark-700/50 border border-primary/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
