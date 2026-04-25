#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const title = process.argv[2];

if (!title) {
  console.log('Uso: npm run new-post -- "Titulo do Post"');
  console.log('Exemplo: npm run new-post -- "Como usar Node.js"');
  process.exit(1);
}

// Gerar slug a partir do título
const slug = title
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');

// Gerar data no formato YYYY-MM-DD
const now = new Date();
const date = now.toISOString().split('T')[0];

// Criar arquivo
const postsDir = path.join(__dirname, '../src/posts');
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

const filePath = path.join(postsDir, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.log(`❌ Arquivo já existe: ${filePath}`);
  process.exit(1);
}

const content = `---
title: ${title}
date: ${date}
description: Descrição breve do post
tags: [tag1, tag2]
---

# ${title}

Seu conteúdo aqui...

## Seção

Mais conteúdo...

## Conclusão

Finalize com sua conclusão.
`;

fs.writeFileSync(filePath, content);

console.log(`✅ Post criado: ${filePath}`);
console.log('📝 Próximos passos:');
console.log('   1. Edite o arquivo');
console.log('   2. Execute: npm run dev');
console.log('   3. Visite: http://localhost:8000 (ou abra dist/index.html)');
