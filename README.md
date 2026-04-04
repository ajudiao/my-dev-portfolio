# AnderDev Portfolio 🚀

Um portfólio moderno e responsivo criado com React, Tailwind CSS e Framer Motion.

## 🎨 Características

- ✨ Design moderno com tema escuro/claro
- 🎭 Animações suaves com Framer Motion
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🧩 Componentes reutilizáveis
- ⚡ Performance otimizada
- 🔍 SEO otimizado
- 🎯 React Router para navegação entre páginas
- 🎪 Efeito de partículas no background

## 🛠️ Tecnologias Utilizadas

- **React** 18.2.0 - Biblioteca de UI
- **React Router DOM** 6.21.0 - Roteamento
- **Tailwind CSS** 3.4.1 - Estilização
- **Framer Motion** 10.16.16 - Animações
- **Lucide React** 0.294.0 - Ícones
- **Vite** 5.0.8 - Build tool

## 📋 Requisitos

- Node.js 16.x ou superior
- pnpm, npm ou yarn

## 🚀 Como Iniciar

1. **Clone o repositório**
   ```bash
   git clone <seu-repositorio>
   cd anderdev-portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   pnpm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   pnpm dev
   # ou
   yarn dev
   ```

4. **Abra no navegador**
   - A aplicação abrirá automaticamente em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx                 # Cabeçalho com navegação
│   ├── Footer.jsx                 # Rodapé
│   ├── ParticleBackground.jsx     # Efeito de partículas
│   ├── ProjectCard.jsx            # Card de projeto
│   ├── SkillBar.jsx               # Barra de habilidade
│   └── useInView.js               # Hook para animar em scroll
├── pages/
│   ├── Home.jsx                   # Página inicial
│   ├── Projects.jsx               # Página de projetos
│   ├── Blog.jsx                   # Página de blog
│   └── Contact.jsx                # Página de contato
├── App.jsx                        # Componente raiz com rotas
├── main.jsx                       # Entrada da aplicação
└── index.css                      # Estilos globais

public/
└── vite.svg

tailwind.config.js                 # Configuração do Tailwind
vite.config.js                     # Configuração do Vite
package.json                       # Dependências do projeto
```

## 📄 Páginas Disponíveis

### Home (`/`)
- Hero section com apresentação
- Seção "Sobre Mim"
- Seção de features
- Exibição de habilidades (Front-end e Back-end)
- CTA para contato

### Projetos (`/projetos`)
- Grid de projetos com filtros por categoria
- Cards com imagem, descrição e tecnologias
- Links para GitHub e Demo

### Blog (`/blog`)
- Lista de artigos com datas
- Imagens, categorias e tempo de leitura
- Seção de newsletter

### Contato (`/contato`)
- Formulário de contato
- Informações de contato
- Links para redes sociais
- FAQ

## 🎨 Personalização

### Cores
As cores principal estão definidas em `tailwind.config.js`:
- `primary`: `#00d4ff` (Cyan)
- `secondary`: `#00ff88` (Green)
- `accent`: `#ff0080` (Pink)

Para alterar, edite os valores em `tailwind.config.js` e `index.css`.

### Conteúdo
- Edite os componentes de página em `src/pages/`
- Atualize as informações nos arrays de dados
- Customize o Header e Footer em `src/components/`

### Fontes
- Font padrão: Inter (do Google Fonts)
- Configurado em `index.html` e `tailwind.config.js`

## 🔧 Scripts Disponíveis

```bash
npm run dev       # Inicia servidor de desenvolvimento
npm run build     # Cria build para produção
npm run preview   # Preview do build em produção
npm run lint      # Executa ESLint
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- Mobile: até 640px
- Tablet: 641px a 1024px
- Desktop: 1025px+

## 🚀 Deploy

### Vercel (Recomendado)
1. Faça push do projeto para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Clique em Deploy

### Netlify
1. Faça push para GitHub
2. Conecte em [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📧 Contato

- Email: andre@anderdev.com
- LinkedIn: [linkedin.com/in/andrejudiao](https://linkedin.com/in/andrejudiao)
- GitHub: [github.com/anderdev](https://github.com/anderdev)

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como inspiração ou base para seu próprio portfólio!

## 🙏 Agradecimentos

- React community
- Tailwind CSS
- Framer Motion
- Lucide Icons

---

Feito com ❤️ por AnderDev
