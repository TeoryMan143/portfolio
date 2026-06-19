---
title: TS Env Validator
description: Faça upload do seu arquivo .env e obtenha validação com Zod instantaneamente!
tags: [ts, react, astro, tailwind, nodejs]
cover: ts-env-validator-cover.png
repo: https://github.com/TeoryMan143/ts-env-validator
---

TS Env Validator é uma pequena ferramenta que recebe seu arquivo `.env` e gera
instantaneamente **código de validação com Zod** junto com **autocompleção TypeScript**
para todas as suas variáveis de ambiente. Sem mais surpresas em tempo de execução por
variáveis ausentes ou com erros de digitação.

## Como funciona

Arraste ou selecione seu arquivo `.env` na zona de upload e clique em **Generate**.
A ferramenta analisa cada chave do arquivo e produz um trecho TypeScript pronto para colar:

```ts
import { z } from 'zod'

const envSchema = z.object({
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  API_KEY: z.string(),
})

envSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
```

O código gerado valida seu ambiente na inicialização da aplicação e estende `ProcessEnv`
para que `process.env.SUA_CHAVE` seja completamente tipado e com autocompleção em
todo o seu projeto.

## Funcionalidades

- Upload de arquivos `.env` com **arrastar e soltar** usando `react-dropzone`
- **Saída com realce de sintaxe** via Shiki com o tema Material Ocean
- **Cópia com um clique** para a área de transferência com notificação de confirmação
- Compatível com qualquer variante de `.env` (`.env.local`, `.env.production`, etc.)

## Stack tecnológico

Construído com **Astro** como framework, **React** para o formulário de upload interativo
e o painel de código, e **Tailwind CSS** para os estilos. Os componentes de UI usam
primitivos do **Radix UI** (Tooltip, Slot) via shadcn. As notificações são gerenciadas
pelo **Sonner**.