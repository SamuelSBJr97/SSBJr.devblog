#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const frontMatter = require('front-matter');
const dayjs = require('dayjs');

// Configuração
const SRC_DIR = path.join(__dirname, '../src');
const DIST_DIR = path.join(__dirname, '../dist');
const CONTENT_DIR = path.join(SRC_DIR, 'content');
const TEMPLATES_DIR = path.join(SRC_DIR, 'templates');

// Inicializar Markdown
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

// Criar diretórios se não existirem
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Ler template
function readTemplate(name) {
  const templatePath = path.join(TEMPLATES_DIR, `${name}.html`);
  return fs.readFileSync(templatePath, 'utf-8');
}

// Função utilitária para ler recursivamente de pastas
function readContentRecursively(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const items = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      items.push(...readContentRecursively(fullPath));
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const { attributes, body } = frontMatter(content);

      items.push({
        slug: file.replace('.md', ''),
        path: fullPath,
        title: attributes.title || 'Sem título',
        date: attributes.date || new Date().toISOString(),
        description: attributes.description || '',
        image: attributes.image || '',
        tags: attributes.tags || [],
        content: md.render(body),
        html: body,
        featured: attributes.featured || false
      });
    }
  });

  return items;
}

// Gerar lista de posts
function getPosts() {
  const postsDir = path.join(CONTENT_DIR, 'posts');
  const posts = readContentRecursively(postsDir)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}

// Gerar lista de projetos
function getProjects() {
  const projectsDir = path.join(CONTENT_DIR, 'projects');
  const projects = readContentRecursively(projectsDir)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return projects;
}

// Gerar lista de produtos
function getProducts() {
  const productsDir = path.join(CONTENT_DIR, 'products');
  const products = readContentRecursively(productsDir)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return products;
}

// Gerar lista de podcasts
function getPodcasts() {
  const podcastsDir = path.join(CONTENT_DIR, 'podcasts');
  const podcasts = readContentRecursively(podcastsDir)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return podcasts;
}

// Gerar lista de vídeos
function getVideos() {
  const videosDir = path.join(CONTENT_DIR, 'videos');
  const videos = readContentRecursively(videosDir)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return videos;
}

// Renderizar post individual
function renderPost(post) {
  const template = readTemplate('post');
  const formattedDate = dayjs(post.date).format('DD/MM/YYYY');
  
  const tagsHtml = post.tags
    .map(tag => `<a href="/tags/${tag.toLowerCase()}.html" class="tag">#${tag}</a>`)
    .join(' ');

  return template
    .replace(/{{title}}/g, post.title)
    .replace(/{{date}}/g, formattedDate)
    .replace(/{{content}}/g, post.content)
    .replace(/{{tags}}/g, tagsHtml)
    .replace(/{{slug}}/g, post.slug);
}

// Renderizar projeto
function renderProject(project) {
  const template = readTemplate('project');
  const formattedDate = dayjs(project.date).format('DD/MM/YYYY');

  return template
    .replace(/{{title}}/g, project.title)
    .replace(/{{date}}/g, formattedDate)
    .replace(/{{content}}/g, project.content)
    .replace(/{{image}}/g, project.image || '/imagens/project-placeholder.jpg')
    .replace(/{{slug}}/g, project.slug);
}

// Renderizar produto
function renderProduct(product) {
  const template = readTemplate('product');
  const formattedDate = dayjs(product.date).format('DD/MM/YYYY');

  return template
    .replace(/{{title}}/g, product.title)
    .replace(/{{date}}/g, formattedDate)
    .replace(/{{content}}/g, product.content)
    .replace(/{{image}}/g, product.image || '/imagens/product-placeholder.jpg')
    .replace(/{{slug}}/g, product.slug);
}

// Renderizar podcast
function renderPodcast(podcast) {
  const template = readTemplate('podcast');
  const formattedDate = dayjs(podcast.date).format('DD/MM/YYYY');

  return template
    .replace(/{{title}}/g, podcast.title)
    .replace(/{{date}}/g, formattedDate)
    .replace(/{{content}}/g, podcast.content)
    .replace(/{{audioUrl}}/g, podcast.audioUrl || '')
    .replace(/{{slug}}/g, podcast.slug);
}

// Renderizar vídeo
function renderVideo(video) {
  const template = readTemplate('video');
  const formattedDate = dayjs(video.date).format('DD/MM/YYYY');

  return template
    .replace(/{{title}}/g, video.title)
    .replace(/{{date}}/g, formattedDate)
    .replace(/{{content}}/g, video.content)
    .replace(/{{videoUrl}}/g, video.videoUrl || '')
    .replace(/{{slug}}/g, video.slug);
}

// Renderizar landing page
function renderLanding(data) {
  const template = readTemplate('landing');
  
  // Carrossel com posts em destaque ou recentes
  const carouselPosts = data.featuredPosts.length > 0 ? data.featuredPosts : data.recentPosts.slice(0, 3);
  const carouselHtml = carouselPosts
    .map((post, idx) => {
      const formattedDate = dayjs(post.date).format('DD/MM/YYYY');
      const image = post.image && post.image.startsWith('http') ? post.image : `${post.image || '/imagens/post-placeholder.jpg'}`;
      const activeClass = idx === 0 ? 'active' : '';
      return `
        <div class="carousel-slide ${activeClass}" data-index="${idx}">
          <img src="${image}" alt="${post.title}" class="carousel-image">
          <div class="carousel-content">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <time>${formattedDate}</time>
            <a href="/posts/${post.slug}.html" class="btn btn-primary">Ler mais</a>
          </div>
        </div>
      `;
    })
    .join('\n');

  // Últimas postagens
  const postsHtml = data.recentPosts.slice(0, 6)
    .map(post => {
      const formattedDate = dayjs(post.date).format('DD/MM/YYYY');
      const image = post.image && post.image.startsWith('http') ? post.image : `${post.image || '/imagens/post-placeholder.jpg'}`;
      return `
        <article class="card">
          <img src="${image}" alt="${post.title}" class="card-image">
          <div class="card-content">
            <h3><a href="/posts/${post.slug}.html">${post.title}</a></h3>
            <time>${formattedDate}</time>
            <p>${post.description}</p>
            <a href="/posts/${post.slug}.html" class="link-more">Leia mais →</a>
          </div>
        </article>
      `;
    })
    .join('\n');

  // Projetos
  const projectsHtml = data.projects
    .map(project => {
      const image = project.image && project.image.startsWith('http') ? project.image : `${project.image || '/imagens/project-placeholder.jpg'}`;
      return `
        <article class="card">
          <img src="${image}" alt="${project.title}" class="card-image">
          <div class="card-content">
            <h3><a href="/projects/${project.slug}.html">${project.title}</a></h3>
            <p>${project.description}</p>
            <a href="/projects/${project.slug}.html" class="link-more">Ver projeto →</a>
          </div>
        </article>
      `;
    })
    .join('\n');

  // Produtos
  const productsHtml = data.products
    .map(product => {
      const image = product.image && product.image.startsWith('http') ? product.image : `${product.image || '/imagens/product-placeholder.jpg'}`;
      return `
        <article class="card product-card">
          <img src="${image}" alt="${product.title}" class="card-image">
          <div class="card-content">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <a href="/products/${product.slug}.html" class="btn btn-secondary">Saiba mais</a>
          </div>
        </article>
      `;
    })
    .join('\n');

  // Podcasts
  const podcastsHtml = data.podcasts
    .map(podcast => {
      const formattedDate = dayjs(podcast.date).format('DD/MM/YYYY');
      return `
        <article class="card podcast-card">
          <div class="podcast-icon">🎙️</div>
          <div class="card-content">
            <h3><a href="/podcasts/${podcast.slug}.html">${podcast.title}</a></h3>
            <time>${formattedDate}</time>
            <p>${podcast.description}</p>
            <a href="/podcasts/${podcast.slug}.html" class="link-more">Ouvir →</a>
          </div>
        </article>
      `;
    })
    .join('\n');

  // Vídeos
  const videosHtml = data.videos
    .map(video => {
      const formattedDate = dayjs(video.date).format('DD/MM/YYYY');
      return `
        <article class="card video-card">
          <div class="video-icon">🎥</div>
          <div class="card-content">
            <h3><a href="/videos/${video.slug}.html">${video.title}</a></h3>
            <time>${formattedDate}</time>
            <p>${video.description}</p>
            <a href="/videos/${video.slug}.html" class="link-more">Assistir →</a>
          </div>
        </article>
      `;
    })
    .join('\n');

  return template
    .replace('{{carousel}}', carouselHtml)
    .replace('{{posts}}', postsHtml)
    .replace('{{projects}}', projectsHtml)
    .replace('{{products}}', productsHtml)
    .replace('{{podcasts}}', podcastsHtml)
    .replace('{{videos}}', videosHtml);
}

// Renderizar página About
function renderAbout() {
  const template = readTemplate('about');
  const aboutPath = path.join(SRC_DIR, 'pages', 'about.md');
  
  if (!fs.existsSync(aboutPath)) {
    return template.replace('{{content}}', '<p>Página em construção...</p>');
  }

  const content = fs.readFileSync(aboutPath, 'utf-8');
  const { body } = frontMatter(content);
  
  return template.replace('{{content}}', md.render(body));
}

// Copiar assets estáticos
function copyAssets() {
  const publicDir = path.join(SRC_DIR, 'public');
  
  if (!fs.existsSync(publicDir)) {
    return;
  }

  function copyRecursive(src, dest) {
    ensureDir(dest);
    const files = fs.readdirSync(src);
    
    files.forEach(file => {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);
      
      if (fs.statSync(srcFile).isDirectory()) {
        copyRecursive(srcFile, destFile);
      } else {
        fs.copyFileSync(srcFile, destFile);
      }
    });
  }

  copyRecursive(publicDir, DIST_DIR);
}

// Build completo
function build() {
  console.log('🔨 Iniciando build...');
  
  // Limpar dist
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true });
  }
  
  ensureDir(DIST_DIR);
  ensureDir(path.join(DIST_DIR, 'posts'));
  ensureDir(path.join(DIST_DIR, 'projects'));
  ensureDir(path.join(DIST_DIR, 'products'));
  ensureDir(path.join(DIST_DIR, 'podcasts'));
  ensureDir(path.join(DIST_DIR, 'videos'));
  
  // Copiar assets
  copyAssets();
  
  // Gerar posts
  const posts = getPosts();
  console.log(`📝 Encontrados ${posts.length} posts`);
  posts.forEach(post => {
    const html = renderPost(post);
    const outputPath = path.join(DIST_DIR, 'posts', `${post.slug}.html`);
    fs.writeFileSync(outputPath, html);
    console.log(`  ✓ posts/${post.slug}.html`);
  });
  
  // Gerar projetos
  const projects = getProjects();
  console.log(`🚀 Encontrados ${projects.length} projetos`);
  projects.forEach(project => {
    const html = renderProject(project);
    const outputPath = path.join(DIST_DIR, 'projects', `${project.slug}.html`);
    fs.writeFileSync(outputPath, html);
    console.log(`  ✓ projects/${project.slug}.html`);
  });
  
  // Gerar produtos
  const products = getProducts();
  console.log(`🛍️ Encontrados ${products.length} produtos`);
  products.forEach(product => {
    const html = renderProduct(product);
    const outputPath = path.join(DIST_DIR, 'products', `${product.slug}.html`);
    fs.writeFileSync(outputPath, html);
    console.log(`  ✓ products/${product.slug}.html`);
  });
  
  // Gerar podcasts
  const podcasts = getPodcasts();
  console.log(`🎙️ Encontrados ${podcasts.length} podcasts`);
  podcasts.forEach(podcast => {
    const html = renderPodcast(podcast);
    const outputPath = path.join(DIST_DIR, 'podcasts', `${podcast.slug}.html`);
    fs.writeFileSync(outputPath, html);
    console.log(`  ✓ podcasts/${podcast.slug}.html`);
  });
  
  // Gerar vídeos
  const videos = getVideos();
  console.log(`🎥 Encontrados ${videos.length} vídeos`);
  videos.forEach(video => {
    const html = renderVideo(video);
    const outputPath = path.join(DIST_DIR, 'videos', `${video.slug}.html`);
    fs.writeFileSync(outputPath, html);
    console.log(`  ✓ videos/${video.slug}.html`);
  });
  
  // Gerar landing page
  const allData = {
    featuredPosts: posts.filter(p => p.featured).slice(0, 3),
    recentPosts: posts.slice(0, 6),
    projects: projects.slice(0, 3),
    products: products.slice(0, 4),
    podcasts: podcasts.slice(0, 3),
    videos: videos.slice(0, 3)
  };
  const landingHtml = renderLanding(allData);
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), landingHtml);
  console.log('✓ index.html (landing page)');
  
  // Gerar about
  const aboutHtml = renderAbout();
  fs.writeFileSync(path.join(DIST_DIR, 'about.html'), aboutHtml);
  console.log('✓ about.html');
  
  // Gerar sitemap
  const allItems = [...posts, ...projects, ...products, ...podcasts, ...videos];
  generateSitemap(allItems);
  
  console.log('\n✨ Build concluído!');
}

// Gerar sitemap
function generateSitemap(items) {
  const baseUrl = 'https://ssbjr.github.io/SSBJr.devblog';
  
  const urls = items.map(item => {
    let type = 'posts'; // default
    
    // Detectar tipo de conteúdo pelas propriedades
    if (item.audioUrl) type = 'podcasts';
    else if (item.videoUrl) type = 'videos';
    // Você pode adicionar lógica para detectar projects e products também
    
    return `  <url>
    <loc>${baseUrl}/${type}/${item.slug}.html</loc>
    <lastmod>${item.date}</lastmod>
    <priority>0.7</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about.html</loc>
    <priority>0.8</priority>
  </url>
  ${urls}
</urlset>`;

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
  console.log('✓ sitemap.xml');
}

build();
