# 📐 Guia de Estilo - SSBJr Dev Blog

Diretrizes para manter o blog consistente, legível e profissional.

## Estilo de Escrita

### Tons

- ✅ Profissional mas acessível
- ✅ Educacional
- ✅ Claro e conciso
- ❌ Muito formal
- ❌ Slang excessivo

### Estrutura de Posts

1. **Introdução** (1-2 parágrafos)
   - Apresente o tópico
   - Explique por que importa

2. **Conteúdo Principal** (com headers)
   - Use H2 para seções principais
   - Use H3 para subseções
   - Mantenha parágrafos curtos (2-3 linhas)

3. **Exemplos/Código**
   - Inclua exemplos práticos
   - Use blocos de código com sintaxe correto
   - Explique o que o código faz

4. **Conclusão**
   - Resuma os pontos principais
   - Indique próximos passos

### Exemplos de Tom

**❌ Ruim:**
```markdown
Então tipo, React é meio complicado mas é legal né... tipo pega um estado 
e muda umas coisas...
```

**✅ Bom:**
```markdown
React é uma biblioteca JavaScript para construir interfaces de usuário 
usando componentes reutilizáveis e gerenciamento eficiente de estado.
```

## Formatação Markdown

### Cabeçalhos

```markdown
# Título do Post (H1 - apenas um por post)
## Seção Principal (H2)
### Subseção (H3)
```

**Nunca pule níveis de header**: Não passe de H1 para H3.

### Énfase

```markdown
**bold para termos importantes**
*itálico para referências suaves*
`código inline para variáveis/nomes`
```

### Listas

```markdown
# Sem ordem
- Item principal
  - Subitem
  - Outro subitem
- Próximo item

# Numerada
1. Primeiro passo
2. Segundo passo
```

### Blocos de Código

```markdown
\`\`\`javascript
// Especifique a linguagem
const resultado = 42;
\`\`\`

\`\`\`bash
# Terminal/shell
npm install pacote
\`\`\`

\`\`\`json
{
  "exemplo": "json"
}
\`\`\`
```

**Linguagens suportadas**: javascript, python, bash, html, css, json, sql, yaml, etc.

### Quotes/Citações

```markdown
> Use para destacar citações, dicas importantes ou avisos
> Pode ter múltiplas linhas
```

### Links

```markdown
[Texto do link](https://exemplo.com)
[Link interno](/posts/outro-post.html)
```

## Front Matter

Sempre inclua todos os campos:

```yaml
---
title: Título Descritivo Aqui          # Obrigatório - 5-10 palavras
date: 2024-04-25                        # Obrigatório - YYYY-MM-DD
description: Breve resumo de 10-20     # Obrigatório - aparece nos cards
tags: [tag1, tag2, tag3]               # Recomendado - 1-5 tags
---
```

### Guia de Título

- ✅ "Como Usar Hooks do React"
- ✅ "Guia Completo de TypeScript para Iniciantes"
- ✅ "Dica Rápida: Debugar com console.log()"
- ❌ "Post" (vago)
- ❌ "Coisa importante sobre código" (vago)

### Guia de Descrição

- ✅ "Um guia passo a passo para implementar autenticação com JWT"
- ✅ "Explore os conceitos principais de programação funcional em JavaScript"
- ❌ "Leia este post legal" (vago)

### Guia de Tags

Use tags consistentes e em minúsculas:

```
Recomendadas:
[javascript, typescript, python, nodejs, react, vue, css, html]
[backend, frontend, fullstack, devops, database]
[tutorial, guia, dica, análise, case-study]
[performance, segurança, testes, arquitetura]
[iniciante, intermediário, avançado]
```

## Imagens

### Uso

```markdown
![Descrição para acessibilidade](./imagens/nome-descritivo.jpg)
```

### Requisitos

- ✅ Máx 500KB por imagem
- ✅ Formato: JPG, PNG, WebP
- ✅ Alt-text descritivo
- ✅ Nomes de arquivo simples: `screenshot-react-devtools.jpg`

## Código Inline vs Blocos

**Inline** (dentro de parágrafos):
```markdown
Use `npm install` para instalar pacotes
```

**Bloco** (código significativo):
```javascript
const exemplo = (x) => {
  console.log(x);
};
```

## Referências e Créditos

Se usar conteúdo de outros, cite:

```markdown
Baseado em [Título Original](link)
Tradução/adaptação de [fonte](link)
```

## Ortografia e Gramática

- ✅ Use verificador (Grammarly, Code Spell Checker)
- ✅ Mantenha tom consistente
- ✅ Evite "você" excessivo
- ✅ Preposições: "em" vs "a"

### Exemplos

- ✅ "Trabalhe em React" não "Trabalhe a React"
- ✅ "Guia para iniciantes" não "Guia ao iniciantes"

## Performance e SEO

- ✅ Título descritivo e conciso
- ✅ Primeira parágrafo responde a pergunta principal
- ✅ Use headers para estrutura lógica
- ✅ Inclua exemplos de código
- ✅ Mantenha padrão de URL: `kebab-case`

## Checklist Pré-Publicação

- [ ] Título é descritivo (5-10 palavras)
- [ ] Data está correta (YYYY-MM-DD)
- [ ] Descrição resume o post
- [ ] Tags são relevantes (1-5)
- [ ] Markdown compila sem erros
- [ ] Headers estão em ordem (H1 > H2 > H3)
- [ ] Blocos de código têm linguagem especificada
- [ ] Links funcionam
- [ ] Imagens existem e carregam
- [ ] Revisão ortográfica
- [ ] Tom é consistente com outros posts
- [ ] Conclusão é clara
- [ ] Testado localmente com `npm run dev`

## Exemplo de Post Bem Formatado

```markdown
---
title: Como Implementar Autenticação JWT em Node.js
date: 2024-04-25
description: Guia passo a passo para adicionar JWT em uma API Express
tags: [nodejs, express, segurança, tutorial]
---

# Como Implementar Autenticação JWT em Node.js

JWT (JSON Web Tokens) é um padrão seguro para autenticação em APIs.
Neste guia, aprenderemos a implementar um sistema completo.

## O que é JWT?

[Explicação clara...]

## Pré-requisitos

- Node.js 14+
- Conhecimento básico de Express

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

Parabéns! Você implementou JWT com sucesso.

## Referências

- [JWT.io](https://jwt.io)
- [Express Docs](https://expressjs.com)
```

---

**Dúvidas sobre estilo?** Abra uma issue no repositório! 📝
