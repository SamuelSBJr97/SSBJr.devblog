# 🚀 Guia de Deploy - SSBJr Dev Blog

## GitHub Pages Setup

### Passo 1: Configurar o Repositório

1. Vá para **Settings** do seu repositório GitHub
2. Navegue para **Pages** (no menu lateral esquerdo)
3. Em "Build and deployment", selecione:
   - **Source**: "Deploy from a branch"
   - **Branch**: `gh-pages` e pasta `/ (root)`

### Passo 2: Deploy Automático com GitHub Actions

A estrutura já inclui um workflow automático (`.github/workflows/deploy.yml`) que:

1. Detecta push para `main` ou `master`
2. Instala dependências
3. Executa `npm run build`
4. Faz deploy para a branch `gh-pages`

**Nenhuma configuração adicional é necessária!** O workflow usa `GITHUB_TOKEN` que já está disponível.

### Passo 3: Aguarde o Deploy

Após fazer push:

```bash
git push origin main
```

1. Vá para a aba **Actions** do seu repositório
2. Veja o workflow "Deploy Blog" executando
3. Após ~1-2 minutos, seu blog estará no ar em:
   - `https://seuusuario.github.io/SSBJr.devblog/`

## Deploy Manual (Alternativa)

Se preferir fazer deploy manual:

```bash
# Build localmente
npm install
npm run build

# Checkout da branch gh-pages
git checkout gh-pages

# Copiar arquivos do dist/
cp -r dist/* ./
git add .
git commit -m "Deploy manual"
git push origin gh-pages

# Voltar para main
git checkout main
```

## Domínio Customizado (Opcional)

Se quiser usar um domínio próprio:

1. Em Settings → Pages, adicione seu domínio em "Custom domain"
2. Configure DNS do seu domínio:
   - Para `exemplo.com`:
     - `A` record apontando para `185.199.108.153`
     - `A` record apontando para `185.199.109.153`
     - `A` record apontando para `185.199.110.153`
     - `A` record apontando para `185.199.111.153`
   
   - Ou para `www.exemplo.com`:
     - `CNAME` apontando para `seuusuario.github.io`

3. Aguarde 24h para DNS se propagar

## Verificar Deploy

Após o deploy:

✅ Blog acessível: `https://seuusuario.github.io/SSBJr.devblog/`
✅ Sitemap indexável: `https://seuusuario.github.io/SSBJr.devblog/sitemap.xml`
✅ CSS carregando corretamente
✅ Posts em Markdown convertidos para HTML

## Troubleshooting

### Workflow não está rodando

1. Verifique se `.github/workflows/deploy.yml` existe
2. Confirme que você tem permissão de "Read and write" em Settings → Actions
3. Faça um commit trivial para disparar o workflow

### Blog não está no ar

1. Aguarde 2-3 minutos após o workflow completar
2. Limpe cache do navegador (Ctrl+Shift+Delete)
3. Verifique em Settings → Pages se o deploy foi bem-sucedido
4. Confirme que o branch `gh-pages` foi criado e existe

### 404 em arquivos

1. Certifique-se que `dist/` foi comitado (ou gerado pelo workflow)
2. Verifique caminhos de URL - devem ser caminhos relativos
3. Reconstrua: `npm run build`

### CSS não está carregando

1. Os caminhos devem ser `/styles/main.css` (absolutos)
2. Verifique que `src/public/styles/` tem os arquivos
3. Limpe cache e força reload: `Ctrl+Shift+R`

## Próximos Passos

- [ ] Fazer primeiro post
- [ ] Testar deploy em staging
- [ ] Personalizar cores e branding
- [ ] Adicionar analytics (Google Analytics, Plausible)
- [ ] Configurar comentários (Disqus, Utterances)
- [ ] Adicionar RSS feed

---

**Precisa de ajuda?** Veja as [GitHub Pages Docs](https://docs.github.com/en/pages)
