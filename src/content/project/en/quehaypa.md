---
title: Que Hay Pa' Hacer
description: A platform to discover and create local events near you
tags: [ts, react, nextjs, tailwind, nodejs, postgres, sql, git]
cover: que-hay-pa-hacer-cover.png
repo: https://github.com/TeoryMan143/que-hay-pa-hacer
---

Que Hay Pa' Hacer ("What is there to do") is a simple events platform that lets users
browse and create local events with location, date, and an image — built to help people
discover what's happening nearby.

## How it works

The home page lists every upcoming event as a card showing its image, title, address, and
date. Tapping a card opens the full event page with a description and a direct link to
open the location in **Google Maps**.

## Creating an event

Users fill out a form with a title, description, date and time, an image upload, and a
location search. The address search is powered by the **Google Maps Places API**,
auto-suggesting matching addresses as you type and resolving them to coordinates behind
the scenes — so users never have to enter latitude/longitude manually.

## Tech stack

Built with **Next.js** and **React**, styled with **Tailwind CSS**. Event data is stored
in a **PostgreSQL** database (Neon serverless) through **Drizzle ORM**, with schemas
shared between the database layer and form validation via **drizzle-zod** and **Zod**.
Images are uploaded and served through **UploadThing**, and server state is managed with
**TanStack Query**. Server Actions (`'use server'`) handle all data mutations and the
reverse-geocoding calls to the Google Maps API.