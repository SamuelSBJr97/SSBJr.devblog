# 📚 Índice de Documentação - SSBJr Dev Blog

Bem-vindo! Este arquivo é um mapa de todos os documentos do projeto.

## 🚀 Comece Aqui

### Para Iniciantes
1. **[QUICKSTART.md](QUICKSTART.md)** ⭐
   - 5 minutos para começar
   - Comandos essenciais
   - Estrutura básica

2. **[README.md](README.md)**
   - Documentação completa
   - Recursos do blog
   - Estrutura do projeto

### Para Landing Page
3. **[LANDING-PAGE.md](LANDING-PAGE.md)** 🎉 NOVO!
   - Como usar a nova landing page
   - Estrutura de conteúdo
   - Exemplos práticos

### Para Deploy
4. **[DEPLOY.md](DEPLOY.md)**
   - Setup do GitHub Pages
   - GitHub Actions automático
   - Troubleshooting

## 📖 Documentos Detalhados

### Criando Conteúdo
- **[TEMPLATES.md](TEMPLATES.md)** - Templates para diferentes tipos de post
  - Template básico
  - Tutorial
  - Análise técnica
  - Dica rápida

- **[STYLE-GUIDE.md](STYLE-GUIDE.md)** - Guia de estilo e formatação
  - Tom e voz
  - Formatação Markdown
  - Checklist pré-publicação

- **[LANDING-PAGE.md](LANDING-PAGE.md)** - Guia da nova landing page 🎉
  - Seções disponíveis
  - Estrutura de pastas
  - Tipos de conteúdo
  - Front matter

### Configuração e Personalização
- **[CONFIG.md](CONFIG.md)** - Configurações do blog
  - Metadados
  - Variáveis CSS
  - Estrutura de templates

### Solução de Problemas
- **[FAQ.md](FAQ.md)** - Perguntas frequentes
  - Como fazer X?
  - Erros comuns
  - Sugestões de features

## 🗂️ Estrutura de Pastas

```
.
├── README.md                    # Documentação principal
├── QUICKSTART.md               # Iniciar em 5 minutos
├── DEPLOY.md                   # Deploy no GitHub Pages
├── TEMPLATES.md                # Templates de posts
├── STYLE-GUIDE.md              # Guia de estilo
├── CONFIG.md                   # Configurações
├── FAQ.md                      # Perguntas frequentes
├── INDEX.md                    # Este arquivo
│
├── src/
│   ├── posts/                  # 📝 Seus artigos
│   │   └── primeiro-post.md    # Exemplo
│   ├── pages/                  # 📄 Páginas estáticas
│   │   └── about.md            # Página sobre
│   ├── templates/              # 🎨 Templates HTML
│   │   ├── index.html          # Lista de posts
│   │   ├── post.html           # Post individual
│   │   ├── about.html          # Página sobre
│   │   └── base.html           # Template base (referência)
│   └── public/                 # 🖼️ Assets estáticos
│       ├── styles/
│       │   ├── main.css        # Estilos principais
│       │   └── prism.css       # Syntax highlighting
│       ├── scripts/
│       │   └── prism.js        # JS para highlight
│       ├── imagens/            # Adicione imagens aqui
│       └── downloads/          # PDFs, arquivos, etc
│
├── scripts/
│   ├── build.js                # ⚙️ Build do site
│   ├── dev.js                  # 👀 Watch + rebuild
│   ├── new-post.js             # ✍️ Criar novo post
│   ├── new-post.sh             # Script Linux/Mac
│   └── new-post.bat            # Script Windows
│
├── dist/                       # 🚀 Output (não commit)
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # 🤖 GitHub Actions
│
└── package.json                # 📦 Dependências npm
```

## 🎯 Fluxo de Trabalho Típico

```
1. Editar QUICKSTART.md              ← Começar aqui
   ↓
2. Instalar: npm install
   ↓
3. Criar post: npm run new-post -- "Título"
   ↓
4. Editar em src/posts/
   ↓
5. Preview: npm run dev
   ↓
6. Build: npm run build
   ↓
7. git add/commit/push
   ↓
8. GitHub Actions faz deploy
   ↓
9. Blog online! 🎉
```

## 📋 Checklist Inicial

- [ ] Leu [QUICKSTART.md](QUICKSTART.md)
- [ ] Executou `npm install`
- [ ] Executou `npm run build`
- [ ] Viu arquivos em `dist/`
- [ ] Personalizou `src/pages/about.md`
- [ ] Criou primeiro post em `src/content/posts/`
- [ ] Executou `npm run dev` e testou localmente
- [ ] Fez push para o GitHub
- [ ] Configurou GitHub Pages
- [ ] Blog está no ar! 🚀

## 🎨 Novas Seções (Landing Page)

✨ A landing page inclui:

- 🎯 **Hero Section** - Apresentação profissional
- 🎠 **Carrossel** - Últimas notícias
- 📝 **Posts** - Blog completo
- 🚀 **Projetos** - Portfólio
- 🛍️ **Loja** - Produtos e cursos
- 🤝 **Patrocinadores** - Parceiros
- 🎙️ **Podcasts** - Áudio
- 🎥 **Vídeos** - Tutoriais
- 💼 **Perfis Dev** - GitHub, LinkedIn, etc
- 🔗 **Rodapé** - Contato e links

Veja [LANDING-PAGE.md](LANDING-PAGE.md) para detalhes!

## 🔍 Comandos Úteis

| Comando | Documentação | O que faz |
|---------|-------------|----------|
| `npm install` | [README.md](README.md) | Instala dependências |
| `npm run build` | [QUICKSTART.md](QUICKSTART.md) | Build do site |
| `npm run dev` | [QUICKSTART.md](QUICKSTART.md) | Watch + build automático |
| `npm run clean` | [README.md](README.md) | Remove pasta `dist/` |
| `npm run new-post` | [TEMPLATES.md](TEMPLATES.md) | Criar novo post |

## 🎨 Customização

| Recurso | Onde Customizar | Documentação |
|---------|-----------------|-------------|
| Cores/Tema | `src/public/styles/main.css` | [CONFIG.md](CONFIG.md) |
| Templates | `src/templates/*.html` | [STYLE-GUIDE.md](STYLE-GUIDE.md) |
| Navegação | `src/templates/` | [CONFIG.md](CONFIG.md) |
| Imagens | `src/public/imagens/` | [README.md](README.md) |
| Posts | `src/posts/` | [TEMPLATES.md](TEMPLATES.md) |

## ❓ Precisa de Ajuda?

1. **Começando?** → [QUICKSTART.md](QUICKSTART.md)
2. **Perdeu?** → [README.md](README.md)
3. **Erro?** → [FAQ.md](FAQ.md)
4. **Deploy?** → [DEPLOY.md](DEPLOY.md)
5. **Estilo?** → [STYLE-GUIDE.md](STYLE-GUIDE.md)
6. **Templates?** → [TEMPLATES.md](TEMPLATES.md)

## 📊 Documentação por Tipo

### Para Escritores
- [QUICKSTART.md](QUICKSTART.md)
- [TEMPLATES.md](TEMPLATES.md)
- [STYLE-GUIDE.md](STYLE-GUIDE.md)

### Para Desenvolvedores
- [README.md](README.md)
- [CONFIG.md](CONFIG.md)
- [DEPLOY.md](DEPLOY.md)

### Para Todos
- [FAQ.md](FAQ.md)
- [INDEX.md](INDEX.md) ← Você está aqui

## 🚀 Próximos Passos

1. Leia [QUICKSTART.md](QUICKSTART.md) (5 min)
2. Execute `npm install`
3. Execute `npm run build`
4. Crie seu primeiro post
5. Faça deploy!

---

**Versão:** 1.0.0  
**Atualizado:** 2024-04-25  
**Licença:** MIT

Divirta-se escrevendo! ✍️
