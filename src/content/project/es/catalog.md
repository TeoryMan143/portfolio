---
title: cataLOG
description: Plataforma de comercio electrónico multi-tenant para que negocios locales vendan sus productos en línea
tags: [ts, react, nextjs, tailwind, nodejs, postgres, tanstack-query, git]
cover: catalog-cover.png
repo: https://github.com/TeoryMan143/cataLOG
---
cataLOG es una plataforma de comercio electrónico multi-tenant que permite a negocios
locales registrarse, construir un catálogo de productos y vender directamente a sus
clientes — todo desde una sola tienda virtual. Cada negocio cuenta con su propia página
pública con banner, enlaces a redes sociales y un código QR compartible, mientras que
los clientes pueden explorar, buscar y comprar entre todos los negocios registrados.

## Para negocios
Los dueños de negocios pueden registrar su tienda con nombre, NIT, dirección e imágenes
de marca, y luego gestionar un catálogo completo de productos: agregar artículos con
múltiples imágenes, categorías, tipos de unidad (unidad, gramo, kilogramo, litro, etc.),
precios e inventario. Los pedidos entrantes se rastrean a través de un flujo de estados
pendiente → enviado → recibido, y cada página de negocio incluye un generador de
código QR para facilitar el uso en tienda física.

## Para clientes
La tienda destaca productos mejor calificados, más económicos y por categoría en la
página principal mediante carruseles con scroll infinito. Una barra de búsqueda global
permite filtrar productos y negocios por categoría y rango de precio, y cada página de
producto muestra disponibilidad, categorías y un carrito de compras con control de
cantidades.

## Pago y checkout
Los artículos del carrito se procesan a través de **MercadoPago**, con un endpoint de
webhook que confirma el pago, crea los pedidos, descuenta el inventario y vacía el
carrito dentro de una sola transacción de base de datos. El historial y el estado en
vivo de los pedidos están disponibles tanto para clientes como para dueños de negocios
después de la compra.

## Autenticación y cuentas
La autenticación soporta correo/contraseña y Google OAuth, construida con **Lucia Auth**
y adaptadores de **Drizzle ORM**. Los flujos de verificación de correo y recuperación
de contraseña se manejan con JWTs firmados y correos transaccionales enviados mediante
**Nodemailer** y **React Email**.

## Stack tecnológico
Construido con **Next.js 14** (App Router) y **TypeScript**, con estilos en
**Tailwind CSS** y primitivos de Radix UI. Los datos se modelan con **Drizzle ORM**
sobre **Postgres** (Vercel Postgres), con **TanStack Query** potenciando el fetching de
datos en el cliente, el scroll infinito y la invalidación de caché. Los formularios usan
**React Hook Form** con validación de **Zod**, las cargas de imágenes pasan por
**UploadThing**, y el estado del carrito de compras se gestiona con **Zustand**.