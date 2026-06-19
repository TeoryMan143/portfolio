---
title: SICSAS
description: Sitio web corporativo para una empresa de seguridad industrial contra incendios
tags: [ts, react, astro, tailwind, nodejs, git]
cover: sicsas-cover.png
repo: https://github.com/TeoryMan143/sicsas
---

SICSAS (Seguridad Industrial Cárdenas S.A.S) es el sitio web corporativo de una empresa
con sede en Cali especializada en **sistemas contra incendio**. El sitio presenta los
servicios, productos e información de contacto de la empresa para clientes potenciales
del sector industrial.

## Servicios

El sitio exhibe un catálogo completo de sistemas de protección contra incendio, cada uno
con su propia página que explica su funcionamiento y las normas NFPA que cumple:

- Sistemas de bomba contra incendio (NFPA 20, NFPA 25)
- Sistemas de rociadores automáticos (NFPA 13)
- Sistemas de detección, alarma y evacuación (NFPA 72)
- Sistemas de agente limpio FM-200 (NFPA 2001)
- Sistemas de extinción por espuma
- Sistemas wet chemical para cocinas comerciales (NFPA 17, NFPA 96)
- Gabinetes y mangueras contra incendio (NFPA 1, 14, 25)
- Extintores móviles
- Puertas cortafuego (NFPA 80)

## Productos

Un catálogo de productos de seguridad industrial organizado por categoría de protección
— respiratoria, visual, auditiva, cabeza y facial, manos, altura, pies, corporal,
señalización y elementos de emergencia. Los usuarios pueden filtrar por categoría
mediante un menú desplegable con búsqueda integrada.

## Contacto

Un diálogo de contacto disponible desde cualquier página muestra teléfonos, WhatsApp,
correo electrónico y ubicación de la oficina — todos copiables al portapapeles con un
clic. Un formulario de contacto integrado envía mensajes directamente al correo de la
empresa mediante **Nodemailer** y **React Email**, con validación Zod en cliente y
servidor a través de **Astro Actions**.

## Stack tecnológico

Construido con **Astro** y **React**, estilizado con **Tailwind CSS** y desplegado en
**Vercel**. El contenido se gestiona mediante colecciones de contenido de Astro. La UI
incluye una galería de imágenes con desplazamiento automático, un encabezado animado
que se reduce al hacer scroll usando la API nativa de animaciones dirigidas por scroll
de CSS, y transiciones de página mediante Astro View Transitions.