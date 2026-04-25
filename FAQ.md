# ❓ FAQ - SSBJr Dev Blog

## Como criar um novo post?

1. Crie um arquivo `.md` em `src/posts/`
2. Adicione front matter (title, date, description, tags)
3. Escreva conteúdo em Markdown
4. Execute `npm run dev` para ver ao vivo
5. Execute `npm run build` e faça push

Veja [TEMPLATES.md](TEMPLATES.md) para exemplos.

## Como personalizar o tema?

Edite `src/public/styles/main.css` e altere as variáveis CSS:

```css
:root {
  --primary: #2563eb;        /* Cor principal */
  --background: #ffffff;     /* Fundo */
  --text: #1f2937;          /* Texto */
}
```

## Como adicionar imagens?

1. Adicione imagens em `src/public/imagens/`
2. Reference no Markdown:

```markdown
![Descrição](./imagens/minha-foto.jpg)
```

## Posso mudar a URL do blog?

Depende de onde está hospedado:

- **GitHub Pages**: Configure em `DEPLOY.md`
- **Domínio customizado**: Configure DNS + GitHub Pages settings

## Como adicionar um novo menu?

Edite `src/templates/index.html`, `post.html` e `about.html`:

```html
<ul class="nav-links">
  <li><a href="/">Blog</a></li>
  <li><a href="/about.html">Sobre</a></li>
  <li><a href="/novo-link.html">Novo Link</a></li>  <!-- Adicione aqui -->
</ul>
```

## Quantos posts posso ter?

Sem limite técnico! O build é rápido mesmo com 100+ posts.

Para melhor organização, você pode criar pastas:

```
src/posts/
├── 2024/
│   ├── janeiro/
│   ├── fevereiro/
└── 2025/
```

E editar `scripts/build.js` para fazer recurse de pastas.

## Como adicionar RSS feed?

Edite `scripts/build.js` e adicione uma função `generateRSS()` que gere um arquivo `feed.xml`.

## Posso usar React/Vue no blog?

O blog é **estático**, portanto não suporta JS executável do lado do cliente por padrão.

Se precisar de interatividade:
1. Adicione `<script>` tags nos templates
2. Ou use bibliotecas como HTMX para melhorias progressivas

## Como debug de problemas?

1. Verifique console do navegador (F12)
2. Rode `npm run build` e verifique erros
3. Confirme que arquivos em `dist/` existem
4. Teste com `npm run dev`

## Deploy não funcionou?

Veja [DEPLOY.md](DEPLOY.md) seção "Troubleshooting"

## Como adicionar comentários?

Adicione ao template `post.html`:

```html
<!-- Utterances (recomendado) -->
<script src="https://utteranc.es/client.js"
  repo="seu-usuario/seu-repo"
  issue-term="pathname"
  theme="preferred-color-scheme"
  crossorigin="anonymous"
  async>
</script>

<!-- Ou Disqus -->
<div id="disqus_thread"></div>
```

## Como adicionar SEO?

- ✅ Já tem: Sitemap gerado automaticamente
- ✅ Já tem: Meta tags nos templates
- ✅ Já tem: URLs limpas

Adicione mais em `scripts/build.js`:
- Open Graph tags
- Schema.org JSON-LD
- Google Search Console

## Posso usar em outro servidor além GitHub Pages?

Sim! `dist/` é totalmente estático:
- Netlify
- Vercel
- Firebase Hosting
- Seu próprio servidor

## Como fazer build contínuo?

O workflow GitHub Actions faz isso automaticamente quando você faz push.

Para CI/CD em outro servidor, configure conforme o serviço.

## Como melhorar performance?

1. Otimize imagens (use `imagemin`)
2. Minifique CSS/JS (adicione em `build.js`)
3. Use `gzip` no servidor (GitHub Pages já faz)
4. Lazy-load imagens (adicione JavaScript)

## Posso excluir posts?

Sim! Delete o arquivo `.md` e execute:

```bash
npm run clean
npm run build
```

## Como fazer backup?

Use Git! Todos os arquivos estão no repositório:

```bash
git push
git backup  # seu backup pessoal
```

## Encontrei um bug!

1. Relate no repositório GitHub (Issues)
2. Verifique se é problema do `build.js`
3. Teste com exemplos mínimos

## Documentação oficial

- [Markdown-it](https://github.com/markdown-it/markdown-it)
- [front-matter](https://github.com/jxson/front-matter)
- [GitHub Pages](https://docs.github.com/en/pages)

---

**Mais dúvidas?** Abra uma issue no repositório! 📝
