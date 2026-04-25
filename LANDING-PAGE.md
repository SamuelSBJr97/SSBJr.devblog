# 🎉 Landing Page Completa - Guia de Atualização

## ✨ O Que Foi Criado

Uma landing page profissional e completa com múltiplas seções e tipos de conteúdo.

### Novas Seções

1. **Hero/Header** - Apresentação com CTA
2. **Carrossel** - Últimas notícias com navegação
3. **Posts** - Últimas postagens do blog
4. **Projetos** - Portfólio de projetos
5. **Loja** - Produtos e cursos
6. **Patrocinadores** - Seção de parceiros
7. **Podcasts** - Episódios de áudio
8. **Vídeos** - Tutoriais em vídeo
9. **Perfis de Dev** - Links para GitHub, Stack Overflow, LinkedIn, etc
10. **Rodapé** - Contato e links importantes

## 📁 Nova Estrutura de Pastas

```
src/content/           (NOVO!)
├── posts/             Posts do blog
│   ├── 2024-04-25-10-intro-build.md
│   └── 2024-04-24-14-arquitetura-escalavel.md
├── projects/          Projetos
│   └── 2024-04-ecommerce-nodejs.md
├── products/          Produtos/Cursos
│   └── 2024-04-curso-react.md
├── podcasts/          Episódios de áudio
│   └── 2024-04-devtalk-01.md
└── videos/            Tutoriais em vídeo
    └── 2024-04-express-1h.md
```

**Padrão de Nomes:** `YYYY-MM-DD-HH-slug.md`

## 🎨 Novos Templates

| Template | Uso |
|----------|-----|
| `landing.html` | Página inicial (index.html) |
| `project.html` | Página individual de projeto |
| `product.html` | Página individual de produto |
| `podcast.html` | Página individual de podcast |
| `video.html` | Página individual de vídeo |

## 🎯 Front Matter (Metadados)

### Para Posts
```yaml
---
title: Título do post
date: 2024-04-25
description: Breve descrição
image: /imagens/thumb.jpg
tags: [tag1, tag2]
featured: true/false    # Aparece no carrossel
---
```

### Para Projetos/Produtos
```yaml
---
title: Título
date: 2024-04-25
description: Descrição
image: /imagens/thumb.jpg
---
```

### Para Podcasts
```yaml
---
title: Título do episódio
date: 2024-04-25
description: Descrição
audioUrl: /podcast/arquivo.mp3
---
```

### Para Vídeos
```yaml
---
title: Título do vídeo
date: 2024-04-25
description: Descrição
videoUrl: https://www.youtube.com/embed/VIDEO_ID
---
```

## 🚀 Como Usar

### 1. Criar um Post

```bash
npm run new-post -- "Título do Post"
```

Move o arquivo para a pasta correta em `src/content/posts/`

### 2. Criar um Projeto

```
src/content/projects/2024-04-meu-projeto.md
```

```yaml
---
title: Meu Projeto
date: 2024-04-25
description: Um projeto incrível
image: /imagens/projeto.jpg
---

# Meu Projeto

Descrição do projeto...
```

### 3. Criar um Produto

```
src/content/products/2024-04-meu-curso.md
```

### 4. Criar um Podcast

```
src/content/podcasts/2024-04-episodio-01.md
```

Faça upload do arquivo MP3 para `src/public/podcast/` e referencie em `audioUrl`

### 5. Criar um Vídeo

```
src/content/videos/2024-04-tutorial.md
```

Use o embed URL do YouTube em `videoUrl`

## 🔧 Personalização

### Cores e Tema

Edite `src/public/styles/main.css`:

```css
:root {
  --primary: #2563eb;        /* Azul principal */
  --primary-dark: #1e40af;   /* Azul escuro */
  --background: #ffffff;     /* Fundo */
  --text: #1f2937;           /* Texto */
}
```

### Navegação

Edite `src/templates/landing.html` para adicionar links no menu.

### Rodapé com LinkedIn

No template `landing.html`, procure por:

```html
<a href="https://linkedin.com/in/seu-profile" ...>
```

E substitua `seu-profile` pelo seu usuário do LinkedIn.

### Seção de Patrocinadores

Edite a seção `.sponsors-section` em `landing.html` para adicionar seus patrocinadores reais.

### Perfis de Dev

Edite a seção `.profiles-section` em `landing.html` com seus perfis verdadeiros.

## 📊 Exemplo Completo de Post

```markdown
---
title: Como Implementar Autenticação JWT
date: 2024-04-25
description: Guia completo de autenticação com JWT em Node.js
image: /imagens/jwt-auth.jpg
tags: [javascript, nodejs, segurança]
featured: true
---

# Como Implementar Autenticação JWT

JWT (JSON Web Tokens) é um padrão moderno para autenticação...

## Pré-requisitos

- Node.js 14+
- npm ou yarn

## Passo 1: Instalação

\`\`\`bash
npm install jsonwebtoken express
\`\`\`

## Passo 2: Implementação

\`\`\`javascript
const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { userId: 123 },
  'seu-secreto',
  { expiresIn: '24h' }
);
\`\`\`

## Conclusão

Pronto! Você tem autenticação JWT funcional.
```

## 🔄 Build e Deploy

```bash
# Build local
npm run build

# Ver em dist/
# Abra dist/index.html

# Deploy
git add .
git commit -m "Nova landing page"
git push origin main
```

GitHub Actions fará o deploy automaticamente!

## 📱 Funcionalidades da Landing Page

✅ **Hero Section** - Apresentação profissional
✅ **Carrossel Automático** - Slides de destaque
✅ **Múltiplas Seções** - Posts, projetos, produtos, etc
✅ **Cards Responsivos** - Grid adaptativo
✅ **Hover Effects** - Animações suaves
✅ **Dark Mode** - Suporte automático
✅ **Mobile Friendly** - Responsivo em todos os tamanhos
✅ **SEO Otimizado** - Meta tags completas
✅ **Contador de Slides** - Navegação visual
✅ **Links para Redes** - GitHub, LinkedIn, etc

## 🎨 Exemplos de Conteúdo

Já incluí exemplos em:
- `src/content/posts/` - 2 posts de exemplo
- `src/content/projects/` - 1 projeto de exemplo
- `src/content/products/` - 1 produto de exemplo
- `src/content/podcasts/` - 1 podcast de exemplo
- `src/content/videos/` - 1 vídeo de exemplo

**Delete-os e adicione seu próprio conteúdo!**

## 🚀 Próximos Passos

1. [ ] Personalizar cores e branding
2. [ ] Atualizar perfil "Sobre"
3. [ ] Adicionar seus verdadeiros projetos
4. [ ] Configurar patrocinadores reais
5. [ ] Atualizar links para suas redes
6. [ ] Criar seu primeiro post
7. [ ] Deploy e analisar

## 📝 Troubleshooting

### Landing page não mostra conteúdo

1. Certifique-se que tem arquivos em `src/content/posts/`
2. Execute `npm run build`
3. Verifique `dist/index.html`

### Carrossel não funciona

1. Verifique que `src/public/scripts/carousel.js` existe
2. Confirme que `landing.html` importa o script
3. Abra console do navegador (F12) para erros

### Imagens não carregam

1. Certifique-se que `src/public/imagens/` tem as imagens
2. Use caminhos absolutos: `/imagens/minha-foto.jpg`
3. Formatos suportados: JPG, PNG, WebP

---

**Documentação completa:** [README.md](README.md)
**FAQ:** [FAQ.md](FAQ.md)
**Roadmap:** [ROADMAP.md](ROADMAP.md)

Divirta-se criando conteúdo! 🎉
