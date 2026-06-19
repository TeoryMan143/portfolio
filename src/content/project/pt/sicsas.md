---
title: SICSAS
description: Site corporativo para uma empresa de segurança industrial contra incêndios
tags: [ts, react, astro, tailwind, nodejs, git]
cover: sicsas-cover.png
repo: https://github.com/TeoryMan143/sicsas
---

SICSAS (Seguridad Industrial Cárdenas S.A.S) é o site corporativo de uma empresa
sediada em Cali especializada em **sistemas de combate a incêndio**. O site apresenta
os serviços, produtos e informações de contato da empresa para clientes em potencial
do setor industrial.

## Serviços

O site exibe um catálogo completo de sistemas de proteção contra incêndio, cada um com
sua própria página explicando como funciona e quais normas NFPA atende:

- Sistemas de bomba contra incêndio (NFPA 20, NFPA 25)
- Sistemas de sprinklers automáticos (NFPA 13)
- Sistemas de detecção, alarme e evacuação (NFPA 72)
- Sistemas de agente limpo FM-200 (NFPA 2001)
- Sistemas de extinção por espuma
- Sistemas wet chemical para cozinhas comerciais (NFPA 17, NFPA 96)
- Armários e mangueiras contra incêndio (NFPA 1, 14, 25)
- Extintores portáteis
- Portas corta-fogo (NFPA 80)

## Produtos

Um catálogo de produtos de segurança industrial organizado por categoria de proteção
— respiratória, visual, auditiva, cabeça e face, mãos, altura, pés, corporal,
sinalização e materiais de emergência. Os usuários podem filtrar por categoria através
de um menu suspenso com busca integrada.

## Contato

Um diálogo de contato disponível em qualquer página exibe telefones, WhatsApp, e-mail
e localização do escritório — todos copiáveis para a área de transferência com um clique.
Um formulário de contato integrado envia mensagens diretamente para o e-mail da empresa
via **Nodemailer** e **React Email**, com validação Zod no cliente e no servidor através
das **Astro Actions**.

## Stack tecnológico

Construído com **Astro** e **React**, estilizado com **Tailwind CSS** e implantado na
**Vercel**. O conteúdo é gerenciado por coleções de conteúdo do Astro. A UI inclui uma
galeria de imagens com rolagem automática, um cabeçalho animado que encolhe ao rolar
usando a API nativa de animações orientadas por scroll do CSS, e transições de página
via Astro View Transitions.