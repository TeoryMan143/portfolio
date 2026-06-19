---
title: Que Hay Pa' Hacer
description: Una plataforma para descubrir y crear eventos locales cerca de ti
tags: [ts, react, nextjs, tailwind, nodejs, postgres, sql, git]
cover: que-hay-pa-hacer-cover.png
repo: https://github.com/TeoryMan143/que-hay-pa-hacer
---

Que Hay Pa' Hacer es una plataforma sencilla de eventos que permite a los usuarios
explorar y crear eventos locales con ubicación, fecha e imagen — construida para ayudar
a las personas a descubrir qué está pasando cerca de ellas.

## Cómo funciona

La página principal lista todos los eventos próximos como tarjetas que muestran su
imagen, título, dirección y fecha. Al tocar una tarjeta se abre la página completa del
evento con una descripción y un enlace directo para abrir la ubicación en **Google Maps**.

## Crear un evento

Los usuarios completan un formulario con título, descripción, fecha y hora, una imagen
y una búsqueda de ubicación. La búsqueda de direcciones funciona con la **API de Google
Maps Places**, sugiriendo direcciones coincidentes mientras se escribe y resolviéndolas
a coordenadas internamente — así los usuarios nunca tienen que ingresar latitud/longitud
manualmente.

## Stack tecnológico

Construido con **Next.js** y **React**, estilizado con **Tailwind CSS**. Los datos de
los eventos se almacenan en una base de datos **PostgreSQL** (Neon serverless) a través
de **Drizzle ORM**, con esquemas compartidos entre la capa de base de datos y la
validación de formularios mediante **drizzle-zod** y **Zod**. Las imágenes se suben y
sirven mediante **UploadThing**, y el estado del servidor se gestiona con **TanStack
Query**. Las Server Actions (`'use server'`) manejan todas las mutaciones de datos y las
llamadas de geocodificación inversa a la API de Google Maps.