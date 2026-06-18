---
title: Langdle
description: Um jogo estilo Wordle mas para idiomas!
tags: [js, ts, react, nextjs, tailwind, nodejs, git, tanstack-query, sql, postgres]
---

Langdle é um puzzle linguístico diário inspirado no Wordle. Em vez de adivinhar uma
palavra, você adivinha um **idioma natural** com base nas suas características tipológicas
e fonológicas. Cada tentativa revela o quão perto você está, destacando as características
que o idioma escolhido compartilha com o idioma misterioso.

![Captura de tela do jogo](../../images/langdle-gameplay.png)

## Como funciona

A cada dia um idioma-alvo é selecionado. Você começa sem nenhuma informação — sua primeira
tentativa é essencialmente no escuro. Após cada tentativa, o jogo compara o idioma que
você escolheu com o alvo e mostra quais **características linguísticas** eles têm em comum:

- Sistema de escrita (Alfabeto, Abjad, Abugida, Logográfico...)
- Ordem das palavras (SVO, SOV, VSO...)
- Tipo morfológico (isolante, aglutinante, fusional...)
- Características fonológicas (tons, consoantes cliques, harmonia vocálica...)

As características compartilhadas se iluminam, fornecendo pistas para refinar sua próxima tentativa.

![Comparação de características após uma tentativa](../../images/langdle-guess-feedback.png)

## Stack tecnológico

Construído com **Next.js** e **React** no frontend, estilizado com **Tailwind CSS**, e
alimentado por um backend em **Node.js** conectado a um banco de dados **PostgreSQL**. O
estado do servidor é gerenciado com **TanStack Query** para cache eficiente e atualização
em segundo plano.

## Autenticação

Os usuários podem entrar com **e-mail e senha** ou via **Google OAuth**. As sessões são
persistidas para que seu progresso diário seja salvo em todos os dispositivos.

![Tela de login com opção Google OAuth](../../images/langdle-auth.png)

## Painel de controle

Um painel administrativo permite configurar o conjunto completo de características
linguísticas rastreadas pelo jogo — adicionando novos idiomas, editando seus atributos
e agendando qual idioma aparece em um determinado dia.

![Painel de controle administrativo](../../images/langdle-admin.png)