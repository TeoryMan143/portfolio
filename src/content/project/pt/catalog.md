---
title: cataLOG
description: Plataforma de e-commerce multi-tenant para negócios locais venderem seus produtos online
tags: [ts, react, nextjs, tailwind, nodejs, postgres, tanstack-query, git]
cover: catalog-cover.png
repo: https://github.com/TeoryMan143/cataLOG
---
cataLOG é uma plataforma de e-commerce multi-tenant que permite que negócios locais se
cadastrem, criem um catálogo de produtos e vendam diretamente aos clientes — tudo a
partir de uma única loja virtual. Cada negócio tem sua própria página pública com
banner, links de redes sociais e um código QR compartilhável, enquanto os clientes podem
navegar, pesquisar e finalizar compras entre todos os negócios cadastrados.

## Para negócios
Os donos de negócios podem cadastrar sua loja com nome, NIT, endereço e imagens de
marca, e então gerenciar um catálogo completo de produtos: adicionar itens com múltiplas
imagens, categorias, tipos de unidade (unidade, grama, quilograma, litro etc.), preços e
estoque. Os pedidos recebidos são acompanhados por um fluxo de status
pendente → enviado → recebido, e cada página de negócio inclui um gerador de código QR
para facilitar o compartilhamento na loja física.

## Para clientes
A vitrine destaca produtos mais bem avaliados, mais baratos e por categoria na página
inicial usando carrosséis com rolagem infinita. Uma barra de busca global permite
filtrar produtos e negócios por categoria e faixa de preço, e cada página de produto
mostra disponibilidade, categorias e um carrinho de compras com controle de quantidade.

## Pagamento e checkout
Os itens do carrinho são processados pelo **MercadoPago**, com um endpoint de webhook
que confirma o pagamento, cria os pedidos, reduz o estoque e limpa o carrinho dentro de
uma única transação no banco de dados. O histórico e o status em tempo real dos pedidos
ficam disponíveis tanto para clientes quanto para donos de negócios após a compra.

## Autenticação e contas
A autenticação suporta e-mail/senha e Google OAuth, construída com **Lucia Auth** e
adaptadores do **Drizzle ORM**. Os fluxos de verificação de e-mail e recuperação de
senha são tratados com JWTs assinados e e-mails transacionais enviados via
**Nodemailer** e **React Email**.

## Stack de tecnologia
Construído com **Next.js 14** (App Router) e **TypeScript**, estilizado com
**Tailwind CSS** e primitivos do Radix UI. Os dados são modelados com **Drizzle ORM**
sobre **Postgres** (Vercel Postgres), com o **TanStack Query** potencializando a busca
de dados no cliente, a rolagem infinita e a invalidação de cache. Os formulários usam
**React Hook Form** com validação via **Zod**, os uploads de imagens passam pelo
**UploadThing**, e o estado do carrinho de compras é gerenciado com **Zustand**.