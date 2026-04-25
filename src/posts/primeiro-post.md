---
title: Bem-vindo ao meu Dev Blog
date: 2024-04-25
description: Primeiro post do blog com a estrutura de blog estático gerado com Markdown
tags: [markdown, blog, estático]
---

# Bem-vindo ao meu Dev Blog

Este é o primeiro post do meu novo blog estático gerado com Markdown! 

## Como funciona

Este blog é gerado usando um gerador de site estático simples que:

1. Lê arquivos Markdown da pasta `src/posts/`
2. Converte cada arquivo em uma página HTML
3. Gera um índice com todos os posts
4. Cria um sitemap para SEO

## Estrutura do Projeto

```
src/
├── posts/          # Seus artigos em Markdown
├── pages/          # Páginas estáticas (about)
├── public/         # Assets (CSS, JS, imagens)
└── templates/      # Templates HTML

dist/               # Output do build (hospedado no GitHub Pages)
```

## Como usar

### Criar um novo post

1. Crie um arquivo `.md` em `src/posts/`
2. Adicione o front-matter com título, data e tags:

```markdown
---
title: Título do Post
date: 2024-04-25
description: Descrição breve
tags: [tag1, tag2]
---

# Conteúdo em Markdown
```

### Build

```bash
npm install
npm run build
```

### Desenvolvimento (com watch)

```bash
npm run dev
```

## Publicar no GitHub Pages

1. Certifique-se que o repositório tem o nome `SSBJr.devblog`
2. Faça push da pasta `dist/` para a branch `gh-pages`
3. Configure no GitHub: Settings → Pages → Source: Deploy from branch → Branch: gh-pages

## Próximos passos

- [ ] Personalizar cores e estilo
- [ ] Adicionar mais posts
- [ ] Configurar analytics
- [ ] Implementar comentários

Aproveite! 🚀
