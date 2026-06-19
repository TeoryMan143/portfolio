---
title: cataLOG
description: Multi-tenant e-commerce platform for local businesses to sell their products online
tags: [ts, react, nextjs, tailwind, nodejs, postgres, tanstack-query, git]
cover: catalog-cover.png
repo: https://github.com/TeoryMan143/cataLOG
---
cataLOG is a multi-tenant e-commerce platform that lets local businesses register,
build a product catalog, and sell directly to customers — all from a single storefront.
Each business gets its own public page with a banner, social links, and a shareable QR
code, while customers can browse, search, and check out across every registered business.

## For businesses
Business owners can register their store with a name, NIT, address, and branding images,
then manage a full product catalog: adding items with multiple images, categories, unit
types (unit, gram, kilogram, liter, etc.), pricing, and stock. Incoming orders are tracked
through a pending → sent → arrived status pipeline, and each business page includes a
QR code generator for easy in-store sharing.

## For customers
The storefront highlights top-rated, cheapest, and category-specific products on the
home page using infinite-scroll product carousels. A global search bar supports filtering
products and businesses by category and price range, and each product page shows
availability, categories, and a shopping cart with quantity controls.

## Checkout & payments
Cart items are processed through **MercadoPago**, with a webhook endpoint that
confirms payment, creates orders, decrements stock, and clears the cart inside a single
database transaction. Order history and live status are available to both customers and
business owners after purchase.

## Auth & accounts
Authentication supports email/password and Google OAuth, built with **Lucia Auth** and
**Drizzle ORM** adapters. Email verification and password recovery flows are handled
with signed JWTs and transactional emails sent via **Nodemailer** and **React Email**.

## Tech stack
Built with **Next.js 14** (App Router) and **TypeScript**, styled with **Tailwind CSS**
and Radix UI primitives. Data is modeled with **Drizzle ORM** on **Postgres**
(Vercel Postgres), with **TanStack Query** powering client-side data fetching, infinite
scroll, and cache invalidation. Forms use **React Hook Form** with **Zod** validation,
image uploads go through **UploadThing**, and state for the shopping cart is managed
with **Zustand**.