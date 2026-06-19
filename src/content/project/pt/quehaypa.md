---
title: Que Hay Pa' Hacer
description: Uma plataforma para descobrir e criar eventos locais perto de você
tags: [ts, react, nextjs, tailwind, nodejs, postgres, sql, git]
cover: que-hay-pa-hacer-cover.png
repo: https://github.com/TeoryMan143/que-hay-pa-hacer
---

Que Hay Pa' Hacer é uma plataforma simples de eventos que permite aos usuários explorar
e criar eventos locais com localização, data e imagem — criada para ajudar as pessoas a
descobrir o que está acontecendo por perto.

## Como funciona

A página inicial lista todos os próximos eventos como cartões que mostram sua imagem,
título, endereço e data. Ao tocar em um cartão, abre-se a página completa do evento com
uma descrição e um link direto para abrir a localização no **Google Maps**.

## Criar um evento

Os usuários preenchem um formulário com título, descrição, data e hora, uma imagem e uma
busca de localização. A busca de endereços é feita com a **API do Google Maps Places**,
sugerindo endereços correspondentes enquanto se digita e resolvendo-os para coordenadas
internamente — assim os usuários nunca precisam inserir latitude/longitude manualmente.

## Stack tecnológico

Construído com **Next.js** e **React**, estilizado com **Tailwind CSS**. Os dados dos
eventos são armazenados em um banco de dados **PostgreSQL** (Neon serverless) através do
**Drizzle ORM**, com esquemas compartilhados entre a camada de banco de dados e a
validação de formulários via **drizzle-zod** e **Zod**. As imagens são enviadas e
servidas através do **UploadThing**, e o estado do servidor é gerenciado com **TanStack
Query**. As Server Actions (`'use server'`) tratam todas as mutações de dados e as
chamadas de geocodificação reversa para a API do Google Maps.