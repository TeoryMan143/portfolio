---
title: TS Env Validator
description: Drop your .env file and get Zod validation code instantly
tags: [ts, react, astro, tailwind, nodejs]
cover: ts-env-validator-cover.png
repo: https://github.com/TeoryMan143/ts-env-validator
---

TS Env Validator is a small tool that takes your `.env` file and instantly generates
**Zod validation code** along with **TypeScript autocompletion** for all your environment
variables. No more runtime surprises from missing or mistyped env vars.

## How it works

Drop or select your `.env` file into the upload zone and click **Generate**. The tool
parses every key in the file and produces a ready-to-paste TypeScript snippet:

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

The generated code validates your environment at startup and extends `ProcessEnv` so
`process.env.YOUR_KEY` is fully typed and autocompleted everywhere in your project.

## Features

- **Drag and drop** `.env` file upload powered by `react-dropzone`
- **Syntax-highlighted output** via Shiki with the Material Ocean theme
- **One-click copy** to clipboard with toast feedback
- Supports any `.env` variant (`.env.local`, `.env.production`, etc.)

## Tech stack

Built with **Astro** as the framework, **React** for the interactive upload form and
code panel, and **Tailwind CSS** for styling. The UI components use **Radix UI**
primitives (Tooltip, Slot) via shadcn. Notifications are handled by **Sonner**.