---
title: TS Env Validator
description: ¡Sube tu archivo .env y obtén validación con Zod al instante!
tags: [ts, react, astro, tailwind, nodejs]
cover: ts-env-validator-cover.png
repo: https://github.com/TeoryMan143/ts-env-validator
---

TS Env Validator es una pequeña herramienta que toma tu archivo `.env` y genera
instantáneamente **código de validación con Zod** junto con **autocompletado de TypeScript**
para todas tus variables de entorno. Sin más sorpresas en tiempo de ejecución por
variables faltantes o mal escritas.

## Cómo funciona

Arrastra o selecciona tu archivo `.env` en la zona de carga y haz clic en **Generate**.
La herramienta analiza cada clave del archivo y produce un fragmento de TypeScript
listo para pegar:

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

El código generado valida tu entorno al arrancar la aplicación y extiende `ProcessEnv`
para que `process.env.TU_CLAVE` esté completamente tipado y con autocompletado en
todo tu proyecto.

## Características

- Carga de archivos `.env` con **arrastrar y soltar** usando `react-dropzone`
- **Salida con resaltado de sintaxis** mediante Shiki con el tema Material Ocean
- **Copia con un clic** al portapapeles con notificación de confirmación
- Compatible con cualquier variante de `.env` (`.env.local`, `.env.production`, etc.)

## Stack tecnológico

Construido con **Astro** como framework, **React** para el formulario de carga interactivo
y el panel de código, y **Tailwind CSS** para los estilos. Los componentes de UI usan
primitivos de **Radix UI** (Tooltip, Slot) vía shadcn. Las notificaciones son manejadas
por **Sonner**.