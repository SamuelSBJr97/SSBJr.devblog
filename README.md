# SSBJr Dev Blog

Um gerador de blog estático com Markdown para GitHub Pages. Converte arquivos Markdown em páginas HTML estáticas de alta performance.

## ✨ Recursos

- 📝 Escreva posts em **Markdown simples**
- ⚡ Build rápido e otimizado
- 📱 Design **responsivo** e moderno
- 🌙 Suporte para **dark mode**
- 📊 Geração automática de **sitemap.xml**
- 🚀 Deploy automático com **GitHub Actions**
- 🏷️ Sistema de **tags**
- 📅 Ordenação por data

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── posts/                 # Seus artigos em Markdown
│   │   └── primeiro-post.md   # Post de exemplo
│   ├── pages/                 # Páginas estáticas
│   │   └── about.md           # Página "Sobre"
│   ├── templates/             # Templates HTML
│   │   ├── index.html         # Página inicial
│   │   ├── post.html          # Template do post
│   │   ├── about.html         # Template "Sobre"
│   │   └── base.html          # Template base (referência)
│   └── public/                # Assets estáticos
│       ├── styles/
│       │   ├── main.css       # Estilos principais
│       │   └── prism.css      # Syntax highlighting
│       └── scripts/
│           └── prism.js       # JS para highlight
├── scripts/
│   ├── build.js               # Script de build
│   └── dev.js                 # Script de desenvolvimento
├── dist/                      # Output do build (não commit)
├── package.json
└── .gitignore
```

## 🚀 Quick Start

### 1. Instalação

```bash
npm install
```

### 2. Criar um novo post

Crie um arquivo em `src/posts/meu-primeiro-post.md`:

```markdown
---
title: Título do Post
date: 2024-04-25
description: Uma breve descrição do post
tags: [javascript, web, tutorial]
---

# Meu Primeiro Post

Conteúdo em Markdown aqui...

## Seção

Você pode usar:
- Listas
- **Bold**
- *Itálico*
- `código inline`
- Blocos de código

\`\`\`javascript
console.log('Olá, mundo!');
\`\`\`
```

### 3. Build local

```bash
npm run build
```

Os arquivos HTML serão gerados em `dist/`.

### 4. Desenvolvimento com watch

```bash
npm run dev
```

Mudanças em `src/` dispararão o rebuild automaticamente.

## 📝 Front Matter (Metadados do Post)

Cada post começa com YAML front matter:

```yaml
---
title: Título do seu post        # Obrigatório
date: 2024-04-25                # Formato: YYYY-MM-DD (obrigatório)
description: Descrição breve    # Aparece no card do post (obrigatório)
tags: [tag1, tag2, tag3]        # Array de tags (opcional)
---
```

## 🎨 Personalização

### Cores e Temas

Edite `src/public/styles/main.css` para personalizar:

```css
:root {
  --primary: #2563eb;           /* Cor primária */
  --primary-dark: #1e40af;      /* Cor primária escura */
  --background: #ffffff;        /* Fundo */
  --text: #1f2937;              /* Texto */
  --text-light: #6b7280;        /* Texto claro */
  --border: #e5e7eb;            /* Bordas */
  --code-bg: #f3f4f6;           /* Fundo do código */
}
```

### Navegar para/adicionar imagens

1. Adicione imagens em `src/public/`
2. Referencie no Markdown: `![alt](./imagens/foto.jpg)`

### Modificar templates

Os templates estão em `src/templates/`:
- `index.html` - Página inicial com lista de posts
- `post.html` - Página individual de post
- `about.html` - Página "Sobre"

## 🌐 Deploy no GitHub Pages

### Opção 1: Automático com GitHub Actions (Recomendado)

1. Empurre a estrutura do projeto para o repositório
2. GitHub Actions fará build e deploy automaticamente
3. Configure em: **Settings → Pages → Source: Deploy from a branch → Branch: gh-pages**

O workflow em `.github/workflows/deploy.yml` faz isso automaticamente.

### Opção 2: Manual

```bash
npm run build
git add dist/
git commit -m "Deploy blog"
git push
```

Depois configure em: **Settings → Pages → Source: Deploy from a branch → Branch: main** (ou selecione a pasta `dist`)

## 📊 Estrutura de URLs

- `https://seusite.com/` - Página inicial
- `https://seusite.com/about.html` - Página Sobre
- `https://seusite.com/posts/seu-post.html` - Post individual
- `https://seusite.com/sitemap.xml` - Sitemap para SEO

## 🔧 Dependências

- **markdown-it** - Conversor Markdown → HTML
- **front-matter** - Parser de YAML front matter
- **dayjs** - Manipulação de datas
- **chokidar** - Watch de arquivos (dev)

## 📝 Exemplos de Markdown

### Cabeçalhos

```markdown
# H1
## H2
### H3
```

### Listas

```markdown
- Item 1
- Item 2
  - Aninhado

1. Primeiro
2. Segundo
```

### Código

\`\`\`javascript
function hello() {
  console.log('Olá!');
}
\`\`\`

### Links e Imagens

```markdown
[Link](https://exemplo.com)
![Alt text](imagem.jpg)
```

### Blockquote

```markdown
> Isto é uma citação
> com múltiplas linhas
```

## 🚀 Dicas

- Comite a pasta `dist/` ou configure workflows para auto-deploy
- Use datas no formato `YYYY-MM-DD`
- Mantenha slugs de post simples (use hífens, não espaços)
- Customize o CSS conforme sua marca
- Adicione posts regularmente 📅

## 📄 Licença

MIT
