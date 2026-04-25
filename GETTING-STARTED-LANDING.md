# 🚀 Começando com a Landing Page

Guia passo-a-passo para começar com a nova landing page.

## ⏱️ Tempo Estimado: 10 minutos

---

## 1️⃣ Instalar Dependências

```bash
npm install
```

**O que faz:** Instala markdown-it, dayjs, chokidar e outras dependências necessárias.

---

## 2️⃣ Build Inicial

```bash
npm run build
```

**O que fazer:** Procure por:
```
✓ index.html (landing page)
✓ posts/
✓ projects/
✓ products/
✓ podcasts/
✓ videos/
```

---

## 3️⃣ Preview Local

Abra no navegador:
```
dist/index.html
```

Você deve ver:
- ✅ Hero section com título
- ✅ Carrossel de posts
- ✅ Grid de posts recentes
- ✅ Seção de projetos
- ✅ Seção de loja
- ✅ Patrocinadores
- ✅ Podcasts
- ✅ Vídeos
- ✅ Perfis dev
- ✅ Rodapé

---

## 4️⃣ Personalizar Conteúdo Hero

Edite `src/templates/landing.html`:

```html
<h1>Análise e Desenvolvimento de Sistemas</h1>
<p class="hero-subtitle">Seu subtítulo aqui</p>
```

---

## 5️⃣ Personalizar Cores

Edite `src/public/styles/main.css`:

```css
:root {
  --primary: #2563eb;        /* Azul 💙 */
  /* Altere para sua cor! */
}
```

**Escolha uma cor:**
- Azul: `#2563eb`
- Verde: `#10b981`
- Roxo: `#8b5cf6`
- Vermelho: `#ef4444`

---

## 6️⃣ Adicionar Seu Primeiro Post

### Opção A: Script automático
```bash
npm run new-post -- "Meu Primeiro Post"
```

### Opção B: Manual
Crie o arquivo:
```
src/content/posts/2024-04-25-primeiro-post.md
```

Com conteúdo:
```markdown
---
title: Meu Primeiro Post
date: 2024-04-25
description: Descrição curta e atrativa
image: /imagens/post-thumb.jpg
tags: [javascript, web]
featured: true
---

# Meu Primeiro Post

Aqui vai seu conteúdo...
```

---

## 7️⃣ Rebuild e Veja a Mudança

```bash
npm run build
```

Abra `dist/index.html` no navegador.

Seu post deve aparecer:
- No carrossel (se `featured: true`)
- Na seção "Últimas Postagens"

---

## 8️⃣ Adicionar um Projeto

Crie:
```
src/content/projects/2024-04-meu-projeto.md
```

```markdown
---
title: Meu Projeto Incrível
date: 2024-04-25
description: Uma breve descrição do projeto
image: /imagens/project-thumb.jpg
---

# Meu Projeto Incrível

[Conteúdo do projeto...]

[GitHub](https://github.com/seu-usuario/seu-projeto)
```

---

## 9️⃣ Adicionar um Produto

Crie:
```
src/content/products/2024-04-meu-curso.md
```

```markdown
---
title: Meu Curso/Produto
date: 2024-04-25
description: O que é este produto
image: /imagens/product-thumb.jpg
---

# Meu Curso/Produto

Preço: R$ 99,00

[Descrição e detalhes...]
```

---

## 🔟 Adicionar um Podcast

Crie:
```
src/content/podcasts/2024-04-episodio-01.md
```

```markdown
---
title: Episódio 1 - Meu Podcast
date: 2024-04-25
description: Conversa sobre tecnologia
audioUrl: /podcast/ep01.mp3
---

# Episódio 1

[Notas do episódio...]
```

**Não esqueça:** Coloque o arquivo MP3 em `src/public/podcast/ep01.mp3`

---

## 1️⃣1️⃣ Adicionar um Vídeo

Crie:
```
src/content/videos/2024-04-tutorial.md
```

```markdown
---
title: Meu Tutorial em Vídeo
date: 2024-04-25
description: Tutorial completo
videoUrl: https://www.youtube.com/embed/VIDEO_ID
---

# Meu Tutorial

[Notas sobre o vídeo...]
```

**Para YouTube:** Use o ID do vídeo, ex: `https://www.youtube.com/embed/dQw4w9WgXcQ`

---

## 🔧 Atualizar Perfis Sociais

Edite `src/templates/landing.html`:

```html
<a href="https://github.com/SEU_USUARIO" ...>
<a href="https://stackoverflow.com/users/SEU_ID" ...>
<a href="https://linkedin.com/in/SEU_PERFIL" ...>
<a href="https://dev.to/SEU_USUARIO" ...>
```

---

## 📸 Adicionar Imagens

1. Coloque suas imagens em:
   ```
   src/public/imagens/
   ```

2. Use nos posts:
   ```markdown
   ---
   image: /imagens/minha-imagem.jpg
   ---
   ```

**Tamanhos recomendados:**
- Post thumb: 400x250px
- Project/Product thumb: 400x300px
- Hero background: 1200x600px

---

## 🎨 Customizar Landing Page

### Adicionar logo
Edite `src/templates/landing.html`:
```html
<a href="/" class="logo">Seu Logo</a>
```

### Trocar cores do tema
`src/public/styles/main.css`
```css
--primary: sua-cor;
```

### Adicionar mais seções
Edite `landing.html` e adicione novas `<section>`.

### Mudar rodapé
Procure por `<footer class="footer">` em `landing.html`.

---

## 🚀 Deploy

Quando estiver pronto:

```bash
git add .
git commit -m "Landing page com conteúdo inicial"
git push origin main
```

GitHub Actions fará o deploy automaticamente!

Seu blog estará em: `https://seu-usuario.github.io/SSBJr.devblog/`

---

## 📚 Ver Conteúdo Completo

- **Posts de exemplo:** `src/content/posts/`
- **Todos deletados?** Veja em `LANDING-PAGE.md`
- **Precisa de help?** Veja `FAQ.md`

---

## ✅ Checklist Final

- [ ] Instalou dependências (`npm install`)
- [ ] Fez build inicial (`npm run build`)
- [ ] Viu landing page em `dist/index.html`
- [ ] Personalizou cores
- [ ] Adicionou primeiro post
- [ ] Adicionou projeto
- [ ] Atualizou perfis sociais
- [ ] Adicionou imagens
- [ ] Fez push para GitHub
- [ ] Blog está online! 🎉

---

## 🎉 Próximos Passos

1. ✅ Criar mais posts regularmente
2. ✅ Engajar com comunidade
3. ✅ Monitorar analytics
4. ✅ Adicionar comentários (opcional)
5. ✅ Newsletter (opcional)

---

## 💡 Dicas

- **Posts em destaque:** Use `featured: true` no front-matter
- **Auto-play do carrossel:** A cada 5 segundos
- **Mobile first:** Design já é responsivo
- **Dark mode:** Automático baseado nas preferências do navegador
- **SEO:** Sitemap gerado automaticamente

---

## 🆘 Troubleshooting

### Landing page vazia?
- Verifique se tem arquivos em `src/content/posts/`
- Execute `npm run build` novamente
- Limpe cache do navegador (Ctrl+Shift+Delete)

### Imagens não aparecem?
- Certifique-se que estão em `src/public/imagens/`
- Use caminhos absolutos: `/imagens/nome.jpg`

### Carrossel não funciona?
- Verifique console (F12) para erros
- Certifique-se que `carousel.js` está carregando

### Build falha?
- Verifique YAML front-matter
- Procure por `---` faltando
- Verifique datas no formato YYYY-MM-DD

---

## 📞 Precisa de Ajuda?

- **Guia completo:** [LANDING-PAGE.md](LANDING-PAGE.md)
- **Perguntas:** [FAQ.md](FAQ.md)
- **Templates:** [TEMPLATES.md](TEMPLATES.md)
- **Estilo:** [STYLE-GUIDE.md](STYLE-GUIDE.md)

---

**Vamos começar? Seu blog espera! 🚀**
