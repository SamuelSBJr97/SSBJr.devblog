# 🚀 Quick Start - SSBJr Dev Blog

## 5 Minutos para Começar

### 1️⃣ Instalação

```bash
npm install
```

### 2️⃣ Criar seu primeiro post

Crie um arquivo `src/posts/meu-primeiro-post.md`:

```markdown
---
title: Meu Primeiro Post
date: 2024-04-25
description: Este é meu primeiro post!
tags: [início, markdown]
---

# Meu Primeiro Post

Olá! Este é meu primeiro post no blog.

Você pode usar **bold**, *itálico* e `código inline`.

\`\`\`javascript
console.log('Olá, mundo!');
\`\`\`

Divirta-se escrevendo! 🎉
```

### 3️⃣ Build local

```bash
npm run build
```

Seu site estará em `dist/`. Abra `dist/index.html` no navegador.

### 4️⃣ Desenvolvimento interativo

```bash
npm run dev
```

Agora qualquer mudança em `src/` reconstruirá automaticamente.

### 5️⃣ Deploy

Faça push para o GitHub:

```bash
git add .
git commit -m "Primeiro post"
git push origin main
```

Seu blog estará no ar em minutos! 🌟

---

## Estrutura de Pastas

```
src/
├── posts/         ← Escreva aqui (.md)
├── pages/         ← Páginas estáticas (about.md)
├── public/        ← CSS, JS, imagens
└── templates/     ← HTML (customize aqui)
```

## Comandos Úteis

| Comando | O que faz |
|---------|-----------|
| `npm install` | Instala dependências |
| `npm run build` | Build do site em `dist/` |
| `npm run dev` | Build + watch (auto-rebuild) |
| `npm run clean` | Remove pasta `dist/` |

## Estrutura de um Post

```markdown
---
title: Seu título aqui
date: 2024-04-25                    (YYYY-MM-DD)
description: Breve descrição        (obrigatório)
tags: [tag1, tag2, tag3]           (opcional)
---

# Seu Título

Seu conteúdo em Markdown...
```

## Links Úteis

- 📖 [README.md](README.md) - Documentação completa
- 🚀 [DEPLOY.md](DEPLOY.md) - Guia de deploy
- 📝 [TEMPLATES.md](TEMPLATES.md) - Templates de posts
- ⚙️ [CONFIG.md](CONFIG.md) - Configurações avançadas

## Próximas Ações

- [ ] Personalizar `src/pages/about.md`
- [ ] Adicionar imagens em `src/public/imagens/`
- [ ] Customizar cores em `src/public/styles/main.css`
- [ ] Criar mais posts
- [ ] Deploy no GitHub Pages

---

**Dúvidas?** Veja a documentação completa em [README.md](README.md)
