# Templates de Posts - SSBJr Dev Blog

Utilize os templates abaixo como base para criar novos posts rapidamente.

## Template Básico

Crie um novo arquivo em `src/posts/nome-do-post.md`:

```markdown
---
title: Título do Post
date: 2024-04-25
description: Uma breve descrição que aparecerá na listagem
tags: [javascript, web]
---

# Título do Post

Introdução do seu post...

## Seção 1

Conteúdo aqui...

## Seção 2

Mais conteúdo...

### Subseção

- Ponto 1
- Ponto 2

Conclusão do post.
```

## Template - Tutorial

```markdown
---
title: Como [Fazer Algo] com [Tecnologia]
date: 2024-04-25
description: Um guia passo a passo para fazer algo
tags: [tutorial, guia, javascript]
---

# Como [Fazer Algo] com [Tecnologia]

Neste tutorial, vamos aprender a fazer X usando Y.

## Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conhecimento básico de JavaScript

## Passo 1: Setup

```bash
npm install pacote-necessario
```

## Passo 2: Implementação

```javascript
// Seu código aqui
const resultado = fazAlgo();
```

## Passo 3: Teste

```bash
npm test
```

## Conclusão

Parabéns! Você conseguiu fazer X usando Y. 🎉

## Próximos Passos

- Explorar mais funcionalidades
- Ler a documentação oficial
```

## Template - Análise Técnica

```markdown
---
title: Análise de [Conceito ou Biblioteca]
date: 2024-04-25
description: Uma análise profunda de um conceito técnico
tags: [análise, arquitetura, performance]
---

# Análise de [Conceito ou Biblioteca]

## Introdução

Explicar o que é e por que importa...

## Funcionamento

Como funciona internamente...

## Vantagens

- Ponto 1
- Ponto 2
- Ponto 3

## Desvantagens

- Limitação 1
- Limitação 2

## Casos de Uso

Quando usar e quando evitar...

## Exemplo Prático

```javascript
// Código de exemplo
```

## Referências

- Link 1
- Link 2
```

## Template - Dica Rápida

```markdown
---
title: Dica Rápida: [Título]
date: 2024-04-25
description: Uma dica rápida e prática
tags: [dica, truque]
---

# Dica Rápida: [Título]

## O Problema

Descrever o problema...

## A Solução

```javascript
// Código da solução
```

## Resultado

Explicar o resultado...

## Mais Detalhes

Leitura complementar...
```

## Nomes de Arquivo Recomendados

Use slugs simples (minúsculas, hífens):

✅ Bom:
- `como-usar-react-hooks.md`
- `javascript-async-await-guia.md`
- `dica-otimizacao-performance.md`

❌ Evite:
- `Como Usar React Hooks.md` (espaços)
- `como_usar_react_hooks.md` (underscores)
- `Como.md` (muito genérico)

## Estrutura de Pasta para Média/Longa Contagem de Posts

Se tiver muitos posts, organize por pasta:

```
src/posts/
├── 2024/
│   ├── janeiro/
│   │   └── primeiro-post.md
│   ├── fevereiro/
│   └── março/
└── 2025/
```

Neste caso, edite `scripts/build.js` para fazer recurse de pastas.

## Dicas de Escrita

- Mantenha parágrafos curtos (2-3 linhas)
- Use headers para quebrar o texto
- Adicione exemplos de código quando possível
- Inclua imagens para melhor visualização
- Proofread antes de publicar
- Mantenha tom consistente

## Recursos Markdown

```markdown
# H1 - Título
## H2 - Subtítulo
### H3 - Subsubtítulo

**Bold** e *itálico*

- Lista sem ordem
- Item 2

1. Lista numerada
2. Item 2

> Citação ou destaque

[Link](https://exemplo.com)

![Imagem](./imagens/foto.jpg)

`código inline`

\`\`\`javascript
// Bloco de código
const x = 42;
\`\`\`

---

Linha horizontal
```

## Exemplo Completo

Veja `src/posts/primeiro-post.md` para um exemplo completo!

---

**Dica:** Use um editor Markdown (VS Code, Typora, etc) para visualizar antes de publicar.
