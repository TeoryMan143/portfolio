---
title: Langdle
description: Wordle-like game but for languages!
tags: [js, ts, react, nextjs, tailwind, nodejs, git, tanstack-query, sql, postgres]
---

Langdle is a daily linguistics puzzle inspired by Wordle. Instead of guessing a word,
you guess a **natural language** based on its typological and phonological features.
Each guess reveals how close you are by highlighting the features your guess shares
with the mystery language.

![Langdle gameplay screenshot](../../images/langdle-gameplay.png)

## How it works

Each day a target language is selected. You start with no information — your first
guess is essentially blind. After every guess, the game compares the language you
picked against the target and shows which **linguistic features** they have in common:

- Writing system (Alphabet, Abjad, Abughida, Logographic...)
- Word order (SVO, SOV, VSO...)
- Morphological type (isolating, agglutinative, fusional...)
- Phonological features (tones, click consonants, vowel harmony...)

The shared features light up, giving you clues to narrow down your next guess.

![Feature comparison after a guess](../../images/langdle-guess-feedback.png)

## Tech stack

Built with **Next.js** and **React** on the frontend, styled with **Tailwind CSS**, and
powered by a **Node.js** backend connected to a **PostgreSQL** database. Server state
is managed with **TanStack Query** for efficient caching and background refetching.

## Authentication

Users can sign in with **email and password** or via **Google OAuth**. Sessions are
persisted so your daily progress is saved across devices.

![Login screen with Google OAuth option](../../images/langdle-auth.png)

## Control panel

An admin control panel lets you configure the full set of language features tracked
by the game — adding new languages, editing their attributes, and scheduling which
language appears on a given day.

![Admin control panel](../../images/langdle-admin.png)